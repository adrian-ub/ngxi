import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneNearMeIcon],svg[ic-twotone-near-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.39 12.61l.32.83l1.32 3.42l4.24-10.13l-10.13 4.24l3.42 1.33z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m3 11.51l6.84 2.65L12.48 21h.98L21 3L3 10.53zm14.27-4.78l-4.24 10.13l-1.32-3.42l-.32-.83l-.82-.32l-3.43-1.33z"></svg:path>`,
})
export class IcTwotoneNearMeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
