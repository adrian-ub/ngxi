import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBluetoothAudioIcon],svg[mdi-bluetooth-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.88 16.29L11 18.17v-3.76m0-8.58l1.88 1.88L11 9.58m4.71-1.87L10 2H9v7.58L4.41 5L3 6.41L8.59 12L3 17.58L4.41 19L9 14.41V22h1l5.71-5.71l-4.3-4.29m8.12-5.29L18.26 8c.63 1.18.99 2.55.99 4s-.36 2.82-.99 4l1.2 1.22A9.9 9.9 0 0 0 21 11.91c0-1.91-.54-3.68-1.47-5.2M14.24 12l2.32 2.33c.28-.73.44-1.51.44-2.33s-.16-1.6-.43-2.32z"></svg:path>`,
})
export class MdiBluetoothAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
