import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSchoolBench1Icon],svg[lineicons-school-bench-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.25a.75.75 0 0 0-1.5 0v6h-4a2.25 2.25 0 0 0-2.25 2.25v5.25a.75.75 0 0 0 1.5 0V13.5a.75.75 0 0 1 .75-.75h4v6a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 6a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 1.5 0v-7.5h7.75v7.5a.75.75 0 0 0 1.5 0v-12A.75.75 0 0 0 12 6zm8.5 3.75H3.5V7.5h7.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSchoolBench1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
