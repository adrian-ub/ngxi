import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPropertiesIcon],svg[catppuccin-properties-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M8 1.5c-.87 0-1.17 1.32-2.03 1.63c-.86.3-2.17-.68-2.84 0c-.68.67.3 1.98 0 2.84S1.5 7.13 1.5 8s1.32 1.17 1.63 2.03c.3.86-.68 2.17 0 2.85c.67.67 1.98-.3 2.84 0c.85.3 1.16 1.62 2.03 1.62s1.17-1.32 2.03-1.63c.86-.3 2.17.68 2.85 0c.67-.67-.3-1.98 0-2.84c.3-.85 1.62-1.16 1.62-2.03s-1.32-1.17-1.63-2.03c-.3-.86.68-2.17 0-2.84c-.67-.68-1.98.3-2.84 0S8.87 1.5 8 1.5m0 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class CatppuccinPropertiesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
