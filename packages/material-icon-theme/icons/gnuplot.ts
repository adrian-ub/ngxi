import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGnuplotIcon],svg[material-icon-theme-gnuplot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1E88E5" d="M2-1c-.5 0-1-.5-1-1v-12c0-.5.5-1 1-1h12c.5 0 1 .5 1 1v12c0 .5-.5 1-1 1zm0-2v1h12v-7L9-4L6-7zm0-2l4-4l3 3l5-5v-3H2z"></svg:path>`,
})
export class MaterialIconThemeGnuplotIcon {
  readonly viewBox = input("0 -16 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
