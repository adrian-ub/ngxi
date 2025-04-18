import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContainerTruckIcon],svg[hugeicons-container-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 9v2"></svg:path><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:path d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704C2 16.535 2 15.357 2 13V9c0-2.357 0-3.536.732-4.268S4.643 4 7 4h3.3c1.117 0 1.675 0 2.127.147a3 3 0 0 1 1.926 1.926c.147.452.147 1.01.147 2.127c0 .745 0 1.117.098 1.418a2 2 0 0 0 1.284 1.284c.301.098.673.098 1.418.098H22v2c0 2.357 0 3.535-.732 4.268c-.487.487-1.171.65-2.268.704M9 18h6"></svg:path><svg:path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11M6 9v2"></svg:path></svg:g>`,
})
export class HugeiconsContainerTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
