import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneWarningIcon],svg[iconoir-microphone-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 14v4m0 4.01l.01-.011"></svg:path><svg:rect width="6" height="12" x="7" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H7m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
