import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPowerPlugOffIcon],svg[material-symbols-power-plug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21v-3L6 14.5V9q0-.6.275-1.125t.8-.8v2.8L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-4.95-4.95l-.35.35v3zm7.65-6.7L8 5.15V3h2v4h4V3h2v5l-1-1h1q.825 0 1.413.588T18 9v4.45z"></svg:path>`,
})
export class MaterialSymbolsPowerPlugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
