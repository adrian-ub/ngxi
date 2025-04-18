import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBosniaAndHerzegovinaIcon],svg[emojione-flag-for-bosnia-and-herzegovina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2a5f9e" d="M10.8 53.2c11.7 11.7 30.7 11.7 42.4 0L10.8 10.8C-.9 22.5-.9 41.5 10.8 53.2"></svg:path><svg:path fill="#ffce31" d="m10.8 10.8l42.4 42.4V10.8C41.5-.9 22.5-.9 10.8 10.8"></svg:path><svg:path fill="#2a5f9e" d="M53.2 10.8v42.4c11.7-11.7 11.7-30.7 0-42.4"></svg:path><svg:path fill="#fff" d="m10.9 21l2.4 1.8l-.9-3l2.4-1.8h-3l-.9-3l-.9 3H7l2.4 1.8l-.9 3zm6.8 6.8l2.5 1.9l-1-3l2.5-1.9h-3l-1-3l-.9 3h-3l2.4 1.9l-.9 3zm6.9 6.9l2.4 1.8l-.9-3l2.4-1.8l-3-.1l-.9-2.9l-.9 2.9l-3 .1l2.4 1.8l-.9 3zm6.8 6.8l2.4 1.8l-.9-3l2.4-1.8h-3l-.9-3l-.9 3h-3l2.4 1.8l-.9 3zm6.9 6.8l2.4 1.9l-.9-3l2.4-1.9h-3l-.9-3l-1 3h-3l2.5 1.9l-1 3zm6.8 6.9l2.4 1.8l-.9-3l2.4-1.8h-3l-.9-3l-.9 3h-3l2.4 1.8l-.9 3z"></svg:path>`,
})
export class EmojioneFlagForBosniaAndHerzegovinaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
