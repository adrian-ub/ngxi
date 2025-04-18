import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRobotsIcon],svg[material-icon-theme-robots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.586 18H28a8 8 0 0 0-8-8h-2V8.445a4 4 0 1 0-4 0V10h-2a8 8 0 0 0-8 8h-.586A1.414 1.414 0 0 0 2 19.414v3.172A1.414 1.414 0 0 0 3.414 24H4v1a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-1h.586A1.414 1.414 0 0 0 30 22.586v-3.172A1.414 1.414 0 0 0 28.586 18M11 22a3 3 0 1 1 3-3a3 3 0 0 1-3 3m10 0a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MaterialIconThemeRobotsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
