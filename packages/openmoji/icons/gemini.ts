import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGeminiIcon],svg[openmoji-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v48H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round"><svg:path stroke-miterlimit="10" stroke-width="3" d="M22.86 21.4s3.659 6.388 13.14 6.32c9.481.068 13.14-6.32 13.14-6.32m0 29.2S45.481 44.212 36 44.28c-9.481-.068-13.14 6.32-13.14 6.32"></svg:path><svg:path stroke-linejoin="round" stroke-width="3" d="M40.32 44.16V27.85m-10 17v-17"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M12 12h48v48H12z"></svg:path></svg:g>`,
})
export class OpenmojiGeminiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
