import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPenToolAddIcon],svg[hugeicons-pen-tool-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14.6 20.474l-6.966 1.293c-1.336.248-2.004.372-2.389-.012c-.384-.385-.26-1.053-.012-2.39L6.526 12.4c.208-1.117.311-1.675.68-2.013c.368-.337 1.041-.403 2.388-.535C10.892 9.725 12.12 9.28 13.4 8l5.6 5.6c-1.28 1.28-1.725 2.508-1.853 3.806c-.131 1.347-.197 2.02-.535 2.389c-.337.368-.896.471-2.012.679"></svg:path><svg:path d="M13 16.21a2.66 2.66 0 0 1-1.474-.736m0 0A2.66 2.66 0 0 1 10.79 14m.736 1.474L6 21m7.5-13c.633-.934 1.99-2.839 3.261-2.99c.868-.104 1.586.615 3.023 2.052l.154.154c1.437 1.437 2.156 2.155 2.052 3.023c-.151 1.27-2.056 2.628-2.99 3.261M5 8V2M2 5h6"></svg:path></svg:g>`,
})
export class HugeiconsPenToolAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
