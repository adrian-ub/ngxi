import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeLowIcon],svg[lineicons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 6.34c0-1.941-2.294-2.971-3.745-1.681L6.81 7.5H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.842c1.451 1.29 3.745.26 3.745-1.682zm-2.748-.56a.75.75 0 0 1 1.248.56v11.32a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.985 10.653c.688.765.688 1.93 0 2.695a.75.75 0 0 0 1.116 1.003a3.517 3.517 0 0 0 0-4.7a.75.75 0 0 0-1.116 1.002"></svg:path>`,
})
export class LineiconsVolumeLowIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
