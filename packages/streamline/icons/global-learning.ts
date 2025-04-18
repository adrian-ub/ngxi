import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGlobalLearningIcon],svg[streamline-global-learning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.366 7.318a5.506 5.506 0 1 0-7.549 3.736M.512 6.006h11.011"></svg:path><svg:path d="M4.382 8.547a9.5 9.5 0 0 1-.484-2.541A9.5 9.5 0 0 1 6.016.5a9.5 9.5 0 0 1 2.117 5.506A10 10 0 0 1 8.02 7.06m1.438 1.118l4.03 1.746l-4.03 1.746L5.43 9.924l4.03-1.746Z"></svg:path><svg:path d="m7.257 10.72l.004 1.9s.665.88 2.197.88s2.2-.88 2.2-.88v-1.9m-6.229 2.275V9.924"></svg:path></svg:g>`,
})
export class StreamlineGlobalLearningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
