import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPensiveFaceDuotoneIcon],svg[iconamoon-pensive-face-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 16h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10.5c.463.188.97.29 1.5.29s1.037-.102 1.5-.29m-10 0c.463.188.97.29 1.5.29s1.037-.102 1.5-.29"></svg:path></svg:g>`,
})
export class IconamoonPensiveFaceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
