import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeNunjucksIcon],svg[material-icon-theme-nunjucks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#388e3c" d="M12 4v12L8 4H4v24h4V18l4 10h4V4zm12 6v14h-2v-4h-4v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10Z"></svg:path>`,
})
export class MaterialIconThemeNunjucksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
