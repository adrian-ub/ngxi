import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneSolidIcon],svg[iconoir-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="6" height="12" x="9" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
