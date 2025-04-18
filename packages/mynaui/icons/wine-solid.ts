import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWineSolidIcon],svg[mynaui-wine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.25c-.69 0-1.25.56-1.25 1.25v5.75A5.75 5.75 0 0 0 11.25 15v5.25H8.4a.75.75 0 0 0 0 1.5h7.2a.75.75 0 0 0 0-1.5h-2.85V15a5.75 5.75 0 0 0 5.75-5.75V3.5c0-.69-.56-1.25-1.25-1.25z"></svg:path>`,
})
export class MynauiWineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
