import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riParagraphIcon],svg[ri-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v15h-2v-5a6 6 0 0 1 0-12h10v2h-3v15h-2V6zm-2 0a4 4 0 1 0 0 8z"></svg:path>`,
})
export class RiParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
