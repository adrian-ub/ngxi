import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCodeClimateIcon],svg[catppuccin-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m7.5 13.5l2-1.94L5 7L.55 11.56l1.98 1.94l2.49-2.45zm6-3l2-1.86l-4-4.14l-3 3l2 2l1-1z" transform="matrix(1.00302 0 0 1 -.05 0)"></svg:path>`,
})
export class CatppuccinCodeClimateIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
