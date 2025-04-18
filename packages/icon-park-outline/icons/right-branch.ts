import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRightBranchIcon],svg[icon-park-outline-right-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 8.012c-1.5 0-5.929-.074-7 4.989c-1.083 5.117-5.143 9.847-7 11"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 40c-1.5 0-5.929.063-7-5c-1.083-5.116-5.143-9.848-7-11"></svg:path><svg:circle cx="8" cy="24" r="4" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 24h14m8 0h12M30 8.001h12m-12 32h12"></svg:path></svg:g>`,
})
export class IconParkOutlineRightBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
