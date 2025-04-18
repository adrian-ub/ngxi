import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinXmakeIcon],svg[catppuccin-xmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M14.04 10.42a6.45 6.45 0 0 0-.56-5.92a6.5 6.5 0 0 0-.73-.94L8.99 6.18z"></svg:path><svg:path stroke="#8bd5ca" d="M7.35 7.32L2.2 10.94A6.5 6.5 0 0 0 13 12.15z"></svg:path><svg:path stroke="#a6da95" d="M3.04 3.8a6.47 6.47 0 0 0-1.47 5.14L5.72 6z"></svg:path></svg:g>`,
})
export class CatppuccinXmakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
