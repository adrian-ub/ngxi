import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength1Icon],svg[ix-wlan-strength-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 394.666c0 17.673-14.336 32-32 32s-32-14.327-32-32c0-17.672 14.336-32 32-32s32 14.328 32 32M173.077 311.74l30.144 30.157C216.746 328.376 235.413 320 256 320c20.586 0 39.253 8.375 52.778 21.896l30.144-30.154c-21.248-21.248-50.581-34.409-82.922-34.409c-32.342 0-61.675 13.16-82.923 34.406"></svg:path>`,
})
export class IxWlanStrength1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
