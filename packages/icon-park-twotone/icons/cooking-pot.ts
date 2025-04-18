import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCookingPotIcon],svg[icon-park-twotone-cooking-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCookingPot0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 44h28V20.947C38 14.901 31.732 10 24 10s-14 4.901-14 10.947z" clip-rule="evenodd"></svg:path><svg:path fill="#555" d="M38 22.044v-1.097C38 14.901 31.732 10 24 10s-14 4.901-14 10.947v1.093z"></svg:path><svg:path stroke-linecap="round" d="M4 22h40M21 4h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCookingPot0)"></svg:path>`,
})
export class IconParkTwotoneCookingPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
