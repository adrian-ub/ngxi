import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRuleTwoIcon],svg[icon-park-outline-rule-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 13C11 13 4 22.85 4 35h40c0-12.15-7-22-20-22Z"></svg:path><svg:path stroke-linecap="round" d="M10 31v4m7-4v4m7-4v4m7-4v4m7-4v4"></svg:path><svg:path d="M24 20c-4.554 0-10 2.134-10 6h20c0-3.866-5.446-6-10-6Z"></svg:path></svg:g>`,
})
export class IconParkOutlineRuleTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
