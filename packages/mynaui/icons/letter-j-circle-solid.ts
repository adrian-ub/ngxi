import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJCircleSolidIcon],svg[mynaui-letter-j-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
