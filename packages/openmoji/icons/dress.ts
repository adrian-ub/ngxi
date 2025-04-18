import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDressIcon],svg[openmoji-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61B2E4" d="M36 24.644L29.416 16V4h-5.505v12c0 6.028 4.004 19.958 4.004 19.958L16 67.98h40L44.085 35.96S48.089 22.027 48.089 16V4h-5.506v12z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36 24.644L29.416 16V4h-5.505v12c0 6.028 4.004 19.958 4.004 19.958L16 67.98h40L44.085 35.96S48.089 22.027 48.089 16V4h-5.506v12zm-4.318 11.314h8.644"></svg:path>`,
})
export class OpenmojiDressIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
