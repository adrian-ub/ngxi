import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCameraAutomatically01Icon],svg[hugeicons-camera-automatically-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 17L12 11l-2.5 6m.714-1.714h3.572"></svg:path><svg:path d="M7 6c-1.22.004-1.896.033-2.451.266a3.47 3.47 0 0 0-1.78 1.696c-.303.625-.352 1.426-.451 3.028l-.155 2.51c-.246 3.985-.368 5.977.8 7.239C4.134 22 6.104 22 10.043 22h3.916c3.94 0 5.91 0 7.078-1.261c1.17-1.262 1.047-3.254.8-7.238l-.154-2.51c-.099-1.603-.148-2.404-.45-3.03a3.47 3.47 0 0 0-1.78-1.695C18.895 6.033 18.22 6.004 17 6"></svg:path><svg:path d="m17 7l-.886-2.215c-.382-.955-.715-2.039-1.697-2.525C13.892 2 13.262 2 12 2s-1.892 0-2.417.26c-.982.486-1.315 1.57-1.697 2.525L7 7m5-1h.009"></svg:path></svg:g>`,
})
export class HugeiconsCameraAutomatically01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
