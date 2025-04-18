import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXSolidIcon],svg[mynaui-letter-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4a1 1 0 1 0-1.6 1.2l3.3 4.4l-3.3 4.4a1 1 0 0 0 1.6 1.2l2.95-3.933L14.7 17.6a1 1 0 1 0 1.6-1.2L13 12l3.3-4.4a1 1 0 0 0-1.6-1.2l-2.95 3.933z"></svg:path>`,
})
export class MynauiLetterXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
