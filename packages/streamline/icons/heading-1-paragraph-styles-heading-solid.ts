import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading1ParagraphStylesHeadingSolidIcon],svg[streamline-heading-1-paragraph-styles-heading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V7.27H6v5.48a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0v4.52H1.75zm10.395 6.195a.75.75 0 0 0-1.5 0c0 .29-.235.524-.524.524h-.425a.75.75 0 1 0 0 1.5h.425q.271 0 .523-.069V12h-.948a.75.75 0 0 0 0 1.5h3.397a.75.75 0 0 0 0-1.5h-.949V7.655l-.004-.078a2 2 0 0 0 .005-.132" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeading1ParagraphStylesHeadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
