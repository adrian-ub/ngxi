import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInfusionIcon],svg[icon-park-outline-infusion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 30c0 7.732-6.268 14-14 14s-14-6.268-14-14S24 4 24 4s14 18.268 14 26Z"></svg:path><svg:path stroke-linecap="round" d="M18 30h12m-6-6v12"></svg:path></svg:g>`,
})
export class IconParkOutlineInfusionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
