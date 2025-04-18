import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceStairsDownArrowIcon],svg[guidance-stairs-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15.5 24v-.149a7.5 7.5 0 0 1 1.894-4.982l.106-.12v-.25h-7v-.648a7.5 7.5 0 0 1 1.894-4.982l.106-.12v-.25h-7v-.648A7.5 7.5 0 0 1 7.394 6.87l.106-.12V6.5H0m23.5 4l-10-10m10 10c-.398-.398-.654-1.133-.812-1.79a7.8 7.8 0 0 1-.149-2.687c.08-.697.235-1.464.544-1.773m.417 6.25c-.398-.398-1.133-.654-1.79-.812a7.8 7.8 0 0 0-2.687-.149c-.697.08-1.464.235-1.773.544"></svg:path>`,
})
export class GuidanceStairsDownArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
