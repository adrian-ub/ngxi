import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPushPinIcon],svg[eos-icons-push-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 13.04l-1.99-1.992V3.017h1v-2h-10v2h1v8.023h-.009L6 13.04v2h5.01L11 22h2l.01-6.96H18z"></svg:path>`,
})
export class EosIconsPushPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
