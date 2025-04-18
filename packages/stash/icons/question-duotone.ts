import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashQuestionDuotoneIcon],svg[stash-question-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path><svg:path fill="currentColor" d="M10.75 10c0-.69.56-1.25 1.25-1.25h.116a1.134 1.134 0 0 1 .738 1.994l-.77.661a2.4 2.4 0 0 0-.834 1.812v.533a.75.75 0 0 0 1.5 0v-.533c0-.259.113-.505.31-.673l.77-.66a2.634 2.634 0 0 0-1.714-4.634H12A2.75 2.75 0 0 0 9.25 10v.107a.75.75 0 1 0 1.5 0zM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" opacity=".5"></svg:path>`,
})
export class StashQuestionDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
