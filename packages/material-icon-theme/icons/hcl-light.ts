import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHclLightIcon],svg[material-icon-theme-hcl-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M18 1.2V14h-4v-4l-4 2v16.37l4 2.43V18h4v4l4-2V3.63z"></svg:path><svg:path fill="#455a64" d="M14 1.2L2 8.49v15.02l4 2.43v-15.2l8-4.86zm12 4.86v15.2l-8 4.86v4.68l12-7.29V8.49z"></svg:path>`,
})
export class MaterialIconThemeHclLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
