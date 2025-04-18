import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTerraformIcon],svg[catppuccin-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="m1.5 6l8 4.25l4-2.25m-12-2V1.5l8 4.25l4-2.25V8m-4-2.25v8.75M5.53 3.82L5.5 12.5l4 2"></svg:path>`,
})
export class CatppuccinTerraformIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
