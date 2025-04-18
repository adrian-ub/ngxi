import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMobileVoiceIcon],svg[iconoir-mobile-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 17.01l.01-.011M8 5H3.6a.6.6 0 0 0-.6.6v14.8a.6.6 0 0 0 .6.6h8.8a.6.6 0 0 0 .6-.6V16m3-13v10m-3-8v6m9-4v2M10 7v2m9-5v8"></svg:path>`,
})
export class IconoirMobileVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
