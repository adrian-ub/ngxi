import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePerfumeIcon],svg[icon-park-twotone-perfume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPerfume0"><svg:g fill="none"><svg:rect width="16" height="10" x="16" y="4" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:rect width="36" height="24" x="6" y="20" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 33c3.042-3.867 12-3 18-1s14 5 18 0"></svg:path><svg:path fill="#fff" d="M25 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPerfume0)"></svg:path>`,
})
export class IconParkTwotonePerfumeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
