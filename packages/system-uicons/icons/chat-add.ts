import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChatAddIcon],svg[system-uicons-chat-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.418 4.214A9.3 9.3 0 0 0 10.5 3.75c-4.418 0-8 3.026-8 6.759c0 1.457.546 2.807 1.475 3.91L3 19l3.916-2.447a9.2 9.2 0 0 0 3.584.714c4.418 0 8-3.026 8-6.758c0-.685-.12-1.346-.345-1.969M16.5 3.5v4m2-2h-4"></svg:path>`,
})
export class SystemUiconsChatAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
