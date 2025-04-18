import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAdvertisementFillIcon],svg[ri-advertisement-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.552 13l.847-2.115L9.244 13zM16 12h1v2h-1a1 1 0 1 1 0-2m5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-8.402 13h-2.155l-.4-1h-3.29l-.4 1H4.199l1.199-2.998l.001-.002l2-5h2zM17 8h2v8h-3a3 3 0 1 1 0-6h1z"></svg:path>`,
})
export class RiAdvertisementFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
