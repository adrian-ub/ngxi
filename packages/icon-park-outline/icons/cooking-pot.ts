import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCookingPotIcon],svg[icon-park-outline-cooking-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 44h28V20.947C38 14.901 31.732 10 24 10s-14 4.901-14 10.947z" clip-rule="evenodd"></svg:path><svg:path d="M38 22.044v-1.097C38 14.901 31.732 10 24 10s-14 4.901-14 10.947v1.093z"></svg:path><svg:path stroke-linecap="round" d="M4 22h40M21 4h6"></svg:path></svg:g>`,
})
export class IconParkOutlineCookingPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
