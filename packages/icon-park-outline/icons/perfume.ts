import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePerfumeIcon],svg[icon-park-outline-perfume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="10" x="16" y="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:rect width="36" height="24" x="6" y="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 33c3.042-3.867 12-3 18-1s14 5 18 0"></svg:path><svg:path fill="currentColor" d="M25 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class IconParkOutlinePerfumeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
