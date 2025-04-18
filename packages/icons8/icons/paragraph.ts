import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ParagraphIcon],svg[icons8-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-3.302 0-6 2.698-6 6s2.698 6 6 6h4v10h2V7h2v20h2V7h2V5zm0 2h4v8h-4c-2.22 0-4-1.78-4-4s1.78-4 4-4"></svg:path>`,
})
export class Icons8ParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
