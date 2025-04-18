import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading1ParagraphStylesHeadingIcon],svg[streamline-heading-1-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.394 7.655v5.095M9.696 8.719h.425c.703 0 1.274-.57 1.274-1.274m1.698 5.305H9.696M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading1ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
