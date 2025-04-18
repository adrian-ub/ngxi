import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscordIcon],svg[streamline-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M4.112 6.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m4.5 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M.858 9.864c0-2.401.858-5.574 1.715-6.861c0 0 .858-.429 4.289-.429s4.288.43 4.288.43c.858 1.286 1.716 4.459 1.716 6.86c-.286.43-1.287 1.373-3.002 1.716l-1.51-1.886a6.6 6.6 0 0 1-2.985 0L3.86 11.58c-1.715-.343-2.716-1.287-3.002-1.716"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.86 9.007c.261.261.81.523 1.509.687a6.6 6.6 0 0 0 2.986 0c.699-.164 1.247-.426 1.509-.687"></svg:path></svg:g>`,
})
export class StreamlineDiscordIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
