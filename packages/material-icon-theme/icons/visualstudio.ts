import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVisualstudioIcon],svg[material-icon-theme-visualstudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="m22 11.8l-5.7 4.584L22 20.8zM7.24 23.68L4 21.64v-10.8l3.6-1.2l5.16 3.996L23.2 4L28 7v18.6L22 28l-9.192-8.808zm.36-5.28l2.232-2.064L7.6 14.2Z"></svg:path>`,
})
export class MaterialIconThemeVisualstudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
