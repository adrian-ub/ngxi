import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDhallIcon],svg[catppuccin-dhall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m3.5 11.5l2-7l6-2l2 2l-2 6l-7 2l3-3a1 1 0 1 0-1-1zm6.75-10.25l4.5 4.5M2 14.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class CatppuccinDhallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
