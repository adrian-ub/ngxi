import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMSolidIcon],svg[mynaui-letter-m-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l1.95 2.6a1 1 0 0 0 1.6 0L14.5 10v7a1 1 0 1 0 2 0V7a1 1 0 0 0-1.8-.6l-2.95 3.933z"></svg:path>`,
})
export class MynauiLetterMSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
