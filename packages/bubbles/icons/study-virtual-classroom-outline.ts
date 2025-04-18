import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesStudyVirtualClassroomOutlineIcon],svg[bubbles-study-virtual-classroom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.901 5.053V8.4L7.517 9.569L4.133 8.4V5.053"></svg:path><svg:path d="M14.284 3.619L7.517.75L.75 3.619l6.767 2.868zm-13.534 0v3.825m21.4 7.206V9.883a.733.733 0 0 0-.733-.733h-7.334a.733.733 0 0 0-.733.733v4.767z"></svg:path><svg:path d="M23.187 16.919a.732.732 0 0 1-.67 1.03h-9.534a.732.732 0 0 1-.67-1.03l1.037-2.27h8.8zM10.65 15.183a.733.733 0 0 0-.733-.733H2.583a.733.733 0 0 0-.733.733v4.767h8.8m1.037 2.269a.732.732 0 0 1-.67 1.031H1.483a.734.734 0 0 1-.67-1.031L1.85 19.95h8.8z"></svg:path></svg:g>`,
})
export class BubblesStudyVirtualClassroomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
