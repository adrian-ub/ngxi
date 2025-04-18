import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBitcoinSignIcon],svg[fa6-solid-bitcoin-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32v32h32V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-6.3C18.7 448 0 429.3 0 406.3V101.6C0 80.8 16.8 64 37.6 64H48zm16 192h112c26.5 0 48-21.5 48-48s-21.5-48-48-48H64zm112 64H64v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48z"></svg:path>`,
})
export class Fa6SolidBitcoinSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
