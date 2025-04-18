import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAssemblyIcon],svg[catppuccin-assembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="8" height="13.001" x="4" y="1.499" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" rx="2.286" ry="2.286"></svg:rect><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M4 4.5H1.5M4 8H1.5M4 11.5H1.5m13-7H12M14.5 8H12m2.5 3.5H12"></svg:path>`,
})
export class CatppuccinAssemblyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
