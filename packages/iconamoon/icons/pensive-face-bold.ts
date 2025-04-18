import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPensiveFaceBoldIcon],svg[iconamoon-pensive-face-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9" stroke-linejoin="round"></svg:circle><svg:path d="M10 16h4"></svg:path><svg:path stroke-linejoin="round" d="M14 10.5c.463.188.97.29 1.5.29s1.037-.102 1.5-.29m-10 0c.463.188.97.29 1.5.29s1.037-.102 1.5-.29"></svg:path></svg:g>`,
})
export class IconamoonPensiveFaceBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
