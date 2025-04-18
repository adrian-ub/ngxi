import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDubaiIcon],svg[icon-park-outline-dubai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M14 4v40"></svg:path><svg:path d="M14.5 6S28 13 32 22s1 22 1 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path stroke-linecap="round" d="M10 15h22m-18 7h8m-8 7h12m-12 7h13"></svg:path></svg:g>`,
})
export class IconParkOutlineDubaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
