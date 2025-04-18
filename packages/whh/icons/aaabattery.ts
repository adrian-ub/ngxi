import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAaabatteryIcon],svg[whh-aaabattery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m993.567 807l-186 186q-31 31-74.5 31t-74.5-31l-627-627q-31-31-31-74.5t31-74.5l28-28l-47-47q-12-12-12-29t12-29l72-72q12-12 29-12t29 12l47 47l28-28q31-31 74.5-31t74.5 31l627 627q31 31 31 74.5t-31 74.5m-609-567l-48-48l-48 48l-48-48l-48 48l48 48l-48 48l48 48l48-48l48 48l48-48l-48-48zm553 447l-373-373l-251 250l374 373q24 22 57 19t57-27l128-128q23-24 26.5-57t-18.5-57m-297 98l145-145l48 49l-145 144z"></svg:path>`,
})
export class WhhAaabatteryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
