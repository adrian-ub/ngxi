import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWSolidIcon],svg[mynaui-letter-w-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1.8.6l2.95-3.933L14.7 17.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7l-1.95-2.6a1 1 0 0 0-1.6 0L9 14V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterWSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
