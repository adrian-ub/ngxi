import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRenovateIcon],svg[material-icon-theme-renovate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffb300" d="m13.061 3.722l-.707-.707a1 1 0 0 0-1.414 0L2.454 11.5a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l8.485-8.486a1 1 0 0 0 0-1.414l-.707-.707l.707-.707l2.829 2.828l-7.071 7.071l7.778 7.779a1 1 0 0 0 1.414 0l1.414-1.415a1 1 0 0 0 0-1.414l-6.364-6.364l5.657-5.657L15.182 1.6z"></svg:path>`,
})
export class MaterialIconThemeRenovateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
