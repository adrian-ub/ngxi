import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBurnIcon],svg[fa-solid-burn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0C79.7 101.3 0 220.9 0 300.5C0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5m0 448c-56.5 0-96-39-96-94.8c0-13.5 4.6-61.5 96-161.2c91.4 99.7 96 147.7 96 161.2c0 55.8-39.5 94.8-96 94.8"></svg:path>`,
})
export class FaSolidBurnIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
