import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDesktopComputerIcon],svg[openmoji-desktop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M44.183 60.958c0 4.959 7.84 7.042 7.84 7.042h-31.62s7.84-2.083 7.84-7.042v-4.933h15.779z"></svg:path><svg:path fill="#9b9b9a" d="M63.194 56H9.232a5.075 5.075 0 0 1-5.074-5.075V16.033a5.075 5.075 0 0 1 5.074-5.075h53.962a5.075 5.075 0 0 1 5.075 5.075v34.892A5.075 5.075 0 0 1 63.194 56"></svg:path><svg:path fill="#fff" d="M67.547 46.721L4.213 24.201v-9.458a2.67 2.67 0 0 1 3.566-2.517L67.547 33.48z"></svg:path><svg:path fill="#d0cfce" d="M68.269 47.563s.212 4.144-1.55 6.08c-.36.395-2.645 1.855-3.525 1.854l-53.962.5c-2.802 0-4.164-1.852-4.164-2.444l-.91-5.99"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M63.194 56H9.232a5.075 5.075 0 0 1-5.074-5.075V16.033a5.075 5.075 0 0 1 5.074-5.075h53.962a5.075 5.075 0 0 1 5.075 5.075v34.892A5.075 5.075 0 0 1 63.194 56"></svg:path><svg:path stroke-width=".919" d="m63.194 55.247l-53.962.75c-2.802 0-4.164-1.852-4.164-2.444l-.91-5.99"></svg:path><svg:path stroke-width="2" d="M63.194 55.5L9.232 56a5.075 5.075 0 0 1-5.074-5.075V16.033a5.075 5.075 0 0 1 5.074-5.075h53.962a5.075 5.075 0 0 1 5.075 5.075l-.5 34.892c0 2.803-1.772 4.575-4.575 4.575M7.213 48.492h58m-22.03 12.466c0 4.959 8.84 7.042 8.84 7.042h-31.62s8.84-2.083 8.84-7.042"></svg:path></svg:g>`,
})
export class OpenmojiDesktopComputerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
