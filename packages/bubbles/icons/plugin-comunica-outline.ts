import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginComunicaOutlineIcon],svg[bubbles-plugin-comunica-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.3"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.34 1a9.9 9.9 0 0 0-8.672 5.095a9.92 9.92 0 0 0 .245 10.062L1 22.281l6.118-2.917a9.918 9.918 0 0 0 14.784-5.714a9.94 9.94 0 0 0-1.63-8.71A9.93 9.93 0 0 0 12.34 1"></svg:path><svg:path d="M12.35 11.286a.355.355 0 1 1 0-.71m0 .71a.355.355 0 1 0 0-.71m-4.256.71a.355.355 0 0 1 0-.71m0 .71a.355.355 0 0 0 0-.71m8.512.71a.355.355 0 0 1 0-.71m0 .71a.355.355 0 1 0 0-.71"></svg:path></svg:g>`,
})
export class BubblesPluginComunicaOutlineIcon {
  readonly viewBox = input("0 0 23 23")
  readonly width = input("1em")
  readonly height = input("1em")
}
