import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOSolidIcon],svg[mynaui-letter-o-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 6A3.5 3.5 0 0 0 7 9.5v5a3.5 3.5 0 0 0 3.5 3.5H13a3.5 3.5 0 0 0 3.5-3.5v-5A3.5 3.5 0 0 0 13 6zM9 9.5A1.5 1.5 0 0 1 10.5 8H13a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 16h-2.5A1.5 1.5 0 0 1 9 14.5z"></svg:path>`,
})
export class MynauiLetterOSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
