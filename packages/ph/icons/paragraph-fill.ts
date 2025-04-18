import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParagraphFillIcon],svg[ph-paragraph-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-16 0V56h-24v152a8 8 0 0 1-16 0v-40H96a64 64 0 0 1 0-128h112a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhParagraphFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
