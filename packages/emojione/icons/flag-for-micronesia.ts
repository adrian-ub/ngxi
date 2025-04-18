import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMicronesiaIcon],svg[emojione-flag-for-micronesia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#428bc1"></svg:circle><svg:path fill="#fff" d="m32.8 21.6l2.4 1.8l-.9-2.9l2.4-1.9h-3l-.9-2.9l-.9 2.9h-3l2.4 1.9l-.9 2.9zm0 20.8l2.4-1.8l-.9 2.9l2.4 1.9h-3l-.9 2.9l-.9-2.9h-3l2.4-1.9l-.9-2.9zM21.9 29.9l2.4-1.8l-.9 3l2.4 1.8h-3l-.9 3l-.9-3h-3l2.4-1.8l-.9-3zm20.2 0l-2.4-1.8l.9 3l-2.4 1.8h3l.9 3l.9-3h3l-2.4-1.8l.9-3z"></svg:path>`,
})
export class EmojioneFlagForMicronesiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
