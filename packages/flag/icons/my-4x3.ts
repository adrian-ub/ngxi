import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMy4x3Icon],svg[flag-my-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g clip-path="url(#flagMy4x30)"><svg:path fill="#C00" d="M0 0h640v480H0z"></svg:path><svg:path fill="#C00" d="M0 0h640v34.3H0z"></svg:path><svg:path fill="#fff" d="M0 34.3h640v34.3H0z"></svg:path><svg:path fill="#C00" d="M0 68.6h640v34.3H0z"></svg:path><svg:path fill="#fff" d="M0 102.9h640V137H0z"></svg:path><svg:path fill="#C00" d="M0 137.1h640v34.3H0z"></svg:path><svg:path fill="#fff" d="M0 171.4h640v34.3H0z"></svg:path><svg:path fill="#C00" d="M0 205.7h640V240H0z"></svg:path><svg:path fill="#fff" d="M0 240h640v34.3H0z"></svg:path><svg:path fill="#C00" d="M0 274.3h640v34.3H0z"></svg:path><svg:path fill="#fff" d="M0 308.6h640v34.3H0z"></svg:path><svg:path fill="#C00" d="M0 342.9h640V377H0z"></svg:path><svg:path fill="#fff" d="M0 377.1h640v34.3H0z"></svg:path><svg:path fill="#C00" d="M0 411.4h640v34.3H0z"></svg:path><svg:path fill="#fff" d="M0 445.7h640V480H0z"></svg:path><svg:path fill="#006" d="M0 .5h320v274.3H0z"></svg:path><svg:path fill="#FC0" d="m207.5 73.8l6 40.7l23-34l-12.4 39.2l35.5-20.8l-28.1 30l41-3.2l-38.3 14.8l38.3 14.8l-41-3.2l28.1 30l-35.5-20.8l12.3 39.3l-23-34.1l-6 40.7l-5.9-40.7l-23 34l12.4-39.2l-35.5 20.8l28-30l-41 3.2l38.4-14.8l-38.3-14.8l41 3.2l-28.1-30l35.5 20.8l-12.4-39.3l23 34.1zm-33.3 1.7a71 71 0 0 0-100 65a71 71 0 0 0 100 65a80 80 0 0 1-83.2 6.2a80 80 0 0 1-43.4-71.2a80 80 0 0 1 126.6-65"></svg:path></svg:g><svg:defs><svg:clippath id="flagMy4x30"><svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs>`,
})
export class FlagMy4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
