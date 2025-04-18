import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePhpElephantPinkIcon],svg[material-icon-theme-php-elephant-pink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="M28 10a4 4 0 0 0-4-4h-6v6a6 6 0 0 1-6 6h-2v2h2v6h4v-6h8v6h4V16h2v-4a2 2 0 0 0-2-2"></svg:path><svg:path fill="#ec407a" d="M12 4H8v2a6 6 0 0 0-6 6v6a2 2 0 0 0 2 2v2H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6a2 2 0 0 0 2-2v-8h4a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4M6 14H4v-2h2Z"></svg:path>`,
})
export class MaterialIconThemePhpElephantPinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
