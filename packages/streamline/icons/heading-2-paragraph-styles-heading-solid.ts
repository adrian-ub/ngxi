import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading2ParagraphStylesHeadingSolidIcon],svg[streamline-heading-2-paragraph-styles-heading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V7.27H6v5.48a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0v4.52H1.75zm9.104 5.445c-.9 0-1.624.611-1.885 1.398a.75.75 0 0 0 1.424.472c.08-.243.278-.37.46-.37h.862c.21 0 .461.196.461.542a.55.55 0 0 1-.293.504l-1.845.86c-.735.344-1.178 1.098-1.178 1.895v.754c0 .414.336.75.75.75h3.316a.75.75 0 0 0 0-1.5H10.36v-.004c0-.256.142-.456.313-.535l1.845-.861c.722-.337 1.158-1.079 1.158-1.863c0-1.081-.833-2.042-1.961-2.042z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeading2ParagraphStylesHeadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
