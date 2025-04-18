import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVerdaccioIcon],svg[material-icon-theme-verdaccio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="M18.2 10.237h-4.448l-1.827 3.654l-4.812-9.624H2.665l7.96 15.92h2.6z" clip-rule="evenodd"></svg:path><svg:path fill="#e57373" d="M14.845 3.813v.7h1.767l-.416.825h-2.773v.7h2.42l-.546 1.085h-3.264v.7h3.526l3.766.017l2.01-4.018l-1.1-.003v-.006z"></svg:path>`,
})
export class MaterialIconThemeVerdaccioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
