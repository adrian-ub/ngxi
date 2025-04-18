import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterESolidIcon],svg[mynaui-letter-e-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.25a1 1 0 1 0 0-2H10v-3h4a1 1 0 1 0 0-2h-4V8h5.25a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterESolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
