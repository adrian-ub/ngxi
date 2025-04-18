import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1BusStopIcon],svg[noto-v1-bus-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78a3ad" d="M60.2 18.44h7.06v109.47H60.2z"></svg:path><svg:defs><svg:path id="notoV1BusStop0" d="M82.41 20.67c0 10.16-8.25 18.41-18.41 18.41s-18.41-8.25-18.41-18.41C45.59 10.5 53.84 2.25 64 2.25s18.41 8.24 18.41 18.42"></svg:path></svg:defs><svg:use fill="#f79329" href="#notoV1BusStop0"></svg:use><svg:clippath id="notoV1BusStop1"><svg:use href="#notoV1BusStop0"></svg:use></svg:clippath><svg:path fill="#fff" d="M41.86 16.26h43.66v10.51H41.86z" clip-path="url(#notoV1BusStop1)"></svg:path><svg:path fill="#fff" d="M47.03 46.9h33.41v52.54H47.03z"></svg:path><svg:path fill="#78a3ad" d="M80.44 102.14H47.03c-1.49 0-2.7-1.2-2.7-2.7V46.9c0-1.49 1.21-2.7 2.7-2.7h33.41c1.49 0 2.7 1.2 2.7 2.7v52.54c0 1.5-1.21 2.7-2.7 2.7m-30.72-5.39h28.02V49.6H49.72zm-5.17 31.16v-10.27c0-2.36 1.82-4.28 4.06-4.28h30.25c2.23 0 4.06 1.92 4.06 4.28v10.27z"></svg:path><svg:path fill="#f79329" d="M64 41.24c-11.34 0-20.57-9.23-20.57-20.57C43.43 9.32 52.66.09 64 .09s20.57 9.23 20.57 20.57c0 11.35-9.23 20.58-20.57 20.58m0-36.83c-8.96 0-16.26 7.29-16.26 16.26c0 8.96 7.29 16.26 16.26 16.26s16.26-7.3 16.26-16.26c0-8.97-7.29-16.26-16.26-16.26"></svg:path>`,
})
export class NotoV1BusStopIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
