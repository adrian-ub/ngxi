import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginComunicaNoDotsOutlineIcon],svg[bubbles-plugin-comunica-no-dots-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M12.34 1a9.9 9.9 0 0 0-8.672 5.095a9.92 9.92 0 0 0 .245 10.062L1 22.281l6.118-2.917a9.918 9.918 0 0 0 14.784-5.714a9.94 9.94 0 0 0-1.63-8.71A9.93 9.93 0 0 0 12.34 1"></svg:path>`,
})
export class BubblesPluginComunicaNoDotsOutlineIcon {
  readonly viewBox = input("0 0 23 23")
  readonly width = input("1em")
  readonly height = input("1em")
}
