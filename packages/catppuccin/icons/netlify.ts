import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNetlifyIcon],svg[catppuccin-netlify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8bd5ca" d="m3.5 3.5l1 1m-1 8l1-1M1.5 8h3m7 0h3M8 1.5v3m0 7v3"></svg:path><svg:path stroke="#cad3f5" d="M6.5 9.5v-3h2c.68 0 .97.57 1 1v2"></svg:path></svg:g>`,
})
export class CatppuccinNetlifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
