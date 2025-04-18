import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCameraMicrophone01Icon],svg[hugeicons-camera-microphone-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M7 6c-1.22.004-1.896.033-2.451.266a3.47 3.47 0 0 0-1.78 1.696c-.303.625-.352 1.426-.451 3.028l-.155 2.51c-.246 3.985-.368 5.977.8 7.239C4.134 22 6.104 22 10.043 22h3.916c3.94 0 5.91 0 7.078-1.261c1.17-1.262 1.047-3.254.8-7.238l-.154-2.51c-.099-1.603-.148-2.404-.45-3.03a3.47 3.47 0 0 0-1.78-1.695C18.895 6.033 18.22 6.004 17 6"></svg:path><svg:path stroke="currentColor" d="m17 7l-.886-2.215c-.382-.955-.715-2.039-1.697-2.525C13.892 2 13.262 2 12 2s-1.892 0-2.417.26c-.982.486-1.315 1.57-1.697 2.525L7 7"></svg:path><svg:path fill="currentColor" d="M16.208 14.748a.75.75 0 1 0-1.416-.496zm-7-.496a.75.75 0 1 0-1.416.496zM11.25 18.5a.75.75 0 0 0 1.5 0zM13 11.25v2h1.5v-2zm-2 2v-2H9.5v2zm1 1a1 1 0 0 1-1-1H9.5a2.5 2.5 0 0 0 2.5 2.5zm1-1a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1-3a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5zm0-1.5a2.5 2.5 0 0 0-2.5 2.5H11a1 1 0 0 1 1-1zm2.792 5.502A2.97 2.97 0 0 1 12 16.25v1.5c1.948 0 3.598-1.258 4.208-3.002zM12 16.25a2.97 2.97 0 0 1-2.792-1.998l-1.416.496c.61 1.744 2.26 3.002 4.208 3.002zm-.75.75v1.5h1.5V17z"></svg:path></svg:g>`,
})
export class HugeiconsCameraMicrophone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
