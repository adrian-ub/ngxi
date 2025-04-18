import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineParagraphIcon],svg[streamline-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5h-9a4 4 0 0 0 0 8h2m3-8v13m-3-13v13"></svg:path>`,
})
export class StreamlineParagraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
