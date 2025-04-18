import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterASolidIcon],svg[mynaui-letter-a-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 6a1 1 0 0 0-.936.649l-3.75 10a1 1 0 1 0 1.872.702l1.007-2.684h3.614l1.007 2.684a1 1 0 0 0 1.872-.702l-3.75-10A1 1 0 0 0 11.75 6m0 3.848l1.057 2.819h-2.114z"></svg:path>`,
})
export class MynauiLetterASolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
