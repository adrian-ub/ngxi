import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastLowBatteryIcon],svg[fluent-emoji-high-contrast-low-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H17v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V13h-1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H15z"></svg:path><svg:path d="M13.64 1c-.962 0-1.74.778-1.74 1.74v.25H9.82a2.767 2.767 0 0 0-2.77 2.77v22.48a2.767 2.767 0 0 0 2.77 2.77h12.46a2.767 2.767 0 0 0 2.77-2.77V5.76a2.767 2.767 0 0 0-2.77-2.77H20.2v-.25c0-.962-.778-1.74-1.74-1.74zm.26 3.99V3h4.3v1.99h4.08c.428 0 .77.342.77.77V7h-14V5.76c0-.428.342-.77.77-.77zM9.05 21V8h14v13zm0 7.24V27h14v1.24c0 .428-.342.77-.77.77H9.82a.767.767 0 0 1-.77-.77M13 23.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastLowBatteryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
