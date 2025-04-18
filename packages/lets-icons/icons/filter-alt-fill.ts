import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFilterAltFillIcon],svg[lets-icons-filter-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 2a1 1 0 0 0-1 1v2h16V3a1 1 0 0 0-1-1zm14.782 5H4.218a2 2 0 0 0 .465.598l6 5.25a2 2 0 0 0 2.634 0l6-5.25c.194-.17.351-.373.465-.598"></svg:path><svg:path d="M14 16.705V10h-4v8.705z"></svg:path></svg:g>`,
})
export class LetsIconsFilterAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
