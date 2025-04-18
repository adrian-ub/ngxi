import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitRefreshIcon],svg[formkit-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 6.68H8.82c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12V2.49c0-.28.22-.5.5-.5s.5.22.5.5v3.68c0 .28-.22.5-.5.5Z"></svg:path><svg:path fill="currentColor" d="M7 14.01c-3.31 0-6-2.69-6-6s2.69-6 6-6c2.34 0 4.48 1.37 5.46 3.5c.12.25 0 .55-.25.66c-.25.12-.55 0-.66-.25A5.02 5.02 0 0 0 7 3C4.24 3 2 5.24 2 8s2.24 5 5 5s5-2.24 5-5c0-.28.22-.5.5-.5s.5.22.5.5c0 3.31-2.69 6-6 6Z"></svg:path>`,
})
export class FormkitRefreshIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
