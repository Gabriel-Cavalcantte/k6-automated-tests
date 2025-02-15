import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep} from 'k6';
import { check, fail } from 'k6';

export let GetPagedDuration = new Trend('get_paged_durantion');
export let GetPagedFail = new Rate('get_paged_fail_rate');
export let GetPagedSucessRate = new Rate('get_paged_sucess_rate');
export let GetPagedReqs = new Counter('get_paged_sucess_raqs');

export default function () {
    let response = http.get('http://test.k6.io');

    GetPagedDuration.add(response.timings.duration);
    GetPagedFail.add(response.status === 0 || response.status >= 400);
    GetPagedSucessRate.add(response.status !== 0 && response.status < 400);

    if (response.status !== 0 && response.status < 400) {
        GetPagedReqs.add(1)
    }
    let durationMsg = `Máximo de duração da minha requisão ${5000/1000}s`;
    check(response, {
        'maximo de duração': (r) => r.timings.duration < 5000,
    });

    sleep(1);
}
