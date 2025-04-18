import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamParagraphIcon],svg[jam-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v11a1 1 0 0 1-2 0V2H8v11a1 1 0 0 1-2 0V8H4a4 4 0 1 1 0-8h9a1 1 0 0 1 0 2zM6 6V2H4a2 2 0 1 0 0 4z"></svg:path>`,
})
export class JamParagraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
