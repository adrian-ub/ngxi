import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTimer5ShutterIcon],svg[material-symbols-timer-5-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19v-3h6v-2.5H8V5h9v3h-6v2.5h4q.825 0 1.413.588T17 12.5V16q0 1.25-.875 2.125T14 19z"></svg:path>`,
})
export class MaterialSymbolsTimer5ShutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
