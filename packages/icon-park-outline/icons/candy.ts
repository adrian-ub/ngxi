import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCandyIcon],svg[icon-park-outline-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="24" r="10" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" d="M24 28a4 4 0 0 1-4-4"></svg:path><svg:path stroke-linejoin="round" d="m16.688 16.813l-12.78-1.846L14.842 4.033zm14.625 14.5l12.779 1.845l-10.934 10.934z"></svg:path></svg:g>`,
})
export class IconParkOutlineCandyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
