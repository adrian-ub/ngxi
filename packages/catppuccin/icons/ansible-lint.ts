import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAnsibleLintIcon],svg[catppuccin-ansible-lint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M3.75 10.25L7 2.75l3.25 7.5L5.5 6.5m7.868 1.81A6.5 6.5 0 1 0 7 13.5"></svg:path><svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="m8 11.9l2.5 3.6l4.5-6"></svg:path>`,
})
export class CatppuccinAnsibleLintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
