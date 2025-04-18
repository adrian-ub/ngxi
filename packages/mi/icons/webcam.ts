import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miWebcamIcon],svg[mi-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 6.1c-.3-.2-.7-.2-1 0l-4.4 3V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2.1l4.4 3c.2.1.4.2.6.2s.3 0 .5-.1c.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9M14 17H4V7h10zm6-1.9l-4-2.7v-.9l4-2.7z"></svg:path>`,
})
export class MiWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
