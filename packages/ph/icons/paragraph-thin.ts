import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParagraphThinIcon],svg[ph-paragraph-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H96a60 60 0 0 0 0 120h44v44a4 4 0 0 0 8 0V52h32v156a4 4 0 0 0 8 0V52h20a4 4 0 0 0 0-8m-68 112H96a52 52 0 0 1 0-104h44Z"></svg:path>`,
})
export class PhParagraphThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
