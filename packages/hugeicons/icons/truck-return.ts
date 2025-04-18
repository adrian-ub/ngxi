import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTruckReturnIcon],svg[hugeicons-truck-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M19 11h3v2c0 2.357 0 3.535-.732 4.268c-.487.487-1.171.65-2.268.704m-14 0c-1.097-.054-1.78-.217-2.268-.704C2 16.535 2 15.357 2 13V9c0-2.357 0-3.536.732-4.268S4.643 4 7 4h3.3c1.117 0 1.675 0 2.127.147a3 3 0 0 1 1.926 1.926c.147.452.147 1.01.147 2.127c0 1.22 0 1.831-.334 2.244q-.099.122-.222.222C13.531 11 12.921 11 11.7 11H8m7 7H9m5.5-12h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11"></svg:path><svg:path d="M10 13s-.672-.556-1.263-1.084C8.32 11.58 8 11.293 8 11.005c0-.255.25-.492.656-.864C9.232 9.662 10 9 10 9"></svg:path></svg:g>`,
})
export class HugeiconsTruckReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
