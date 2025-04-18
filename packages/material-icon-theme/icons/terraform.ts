import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTerraformIcon],svg[material-icon-theme-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m2 10l8 4V6L2 2zm10 5l8 4v-8l-8-4zm0 11l8 4v-8l-8-4zm10-14v8l8-4V8z"></svg:path>`,
})
export class MaterialIconThemeTerraformIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
