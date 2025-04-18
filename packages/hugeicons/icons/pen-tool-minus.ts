import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPenToolMinusIcon],svg[hugeicons-pen-tool-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14.6 18.974l-6.966 1.293c-1.336.248-2.004.372-2.389-.012c-.384-.385-.26-1.053-.012-2.39L6.526 10.9c.208-1.117.311-1.675.68-2.013c.368-.337 1.041-.403 2.388-.535C10.892 8.225 12.12 7.78 13.4 6.5l5.6 5.6c-1.28 1.28-1.725 2.508-1.853 3.806c-.131 1.347-.197 2.02-.535 2.388c-.337.369-.896.472-2.012.68"></svg:path><svg:path d="M13 14.71a2.66 2.66 0 0 1-1.474-.736m0 0a2.66 2.66 0 0 1-.736-1.474m.736 1.474L6 19.5m7.5-13c.633-.934 1.99-2.839 3.261-2.99c.868-.104 1.586.615 3.023 2.052l.154.154c1.437 1.437 2.156 2.155 2.052 3.023c-.151 1.27-2.056 2.628-2.99 3.261M2 3.5h6"></svg:path></svg:g>`,
})
export class HugeiconsPenToolMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
