import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRttIcon],svg[material-symbols-light-rtt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.356 20.27l.169-1.128h2.344L15.112 4.82h-4l-.706 4.5h-1.15l.875-5.627h11.456l-.875 5.627h-1.15l.7-4.5h-4l-2.243 14.323h2.345l-.17 1.127zM4.154 6.5l.152-1H8.46l-.152 1zm-.606 4l.152-1h4.154l-.152 1zm-1.134 8l.146-1h6.442l-.146 1zm.644-4l.152-1h6.442l-.152 1z"></svg:path>`,
})
export class MaterialSymbolsLightRttIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
