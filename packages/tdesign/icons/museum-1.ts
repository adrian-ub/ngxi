import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum1Icon],svg[tdesign-museum-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.765V20h2v-5h2v5h2V4.766A6.2 6.2 0 0 0 12 4c-1.089 0-2.11.277-3 .765m8 1.616v3.72A6.98 6.98 0 0 1 22 8h1v14H1V8h1c1.959 0 3.73.804 5 2.101v-3.72l-.033.03l-1.379-1.448l.724-.69q.526-.5 1.136-.904A8.2 8.2 0 0 1 12 2a8.22 8.22 0 0 1 5.69 2.276l.724.69l-1.38 1.448zM7 15a5 5 0 0 0-4-4.9V20h4zm10 5h4v-9.9a5 5 0 0 0-4 4.9zM11 6.998h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMuseum1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
