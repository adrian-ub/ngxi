import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVitalIcon],svg[catppuccin-vital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M8 15S5 6.5 1 4c1 .2 3.3.5 4.5.5c1 .5 2.5 3 2.5 4c0-1 1.5-3.5 2.5-4A31 31 0 0 0 15 4c-4 2.5-7 11-7 11"></svg:path><svg:path stroke="#c6a0f6" d="M3.4 2.6S5 1 7.7 1S12 2.6 12 2.6m-10.9 4S.5 8.7 2 11a6 6 0 0 0 3.4 3m4.6 0s2.2-.6 3.5-3c1.4-2.2.8-4.5.8-4.5"></svg:path></svg:g>`,
})
export class CatppuccinVitalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
