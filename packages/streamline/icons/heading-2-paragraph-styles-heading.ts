import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading2ParagraphStylesHeadingIcon],svg[streamline-heading-2-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.926 12.75H9.61v-.754c0-.527.293-1.003.745-1.215l1.845-.86c.441-.206.726-.67.726-1.184c0-.714-.542-1.292-1.211-1.292h-.861c-.542 0-1.002.37-1.173.884M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading2ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
