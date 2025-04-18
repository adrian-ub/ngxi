import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledCcIcon],svg[openmoji-circled-cc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-miterlimit="10" stroke-width="5.84" d="M52.34 44.08a7.302 7.302 0 0 1-12.146-5.464v-5.84v5.84v-5.84a7.302 7.302 0 0 1 12.146-5.464M31.78 44.69a7.302 7.302 0 0 1-12.146-5.464v-5.84v5.84v-5.84a7.302 7.302 0 0 1 12.146-5.464" clip-rule="evenodd"></svg:path><svg:circle cx="36" cy="36" r="26.68" stroke-width="4.74"></svg:circle></svg:g>`,
})
export class OpenmojiCircledCcIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
