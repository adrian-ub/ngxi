import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSlintIcon],svg[material-icon-theme-slint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2979ff" d="M12 1L3 7l5 2l-2-2Z"></svg:path><svg:path fill="#2979ff" d="m4 15l9-6l-5-2l2 2Z"></svg:path>`,
})
export class MaterialIconThemeSlintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
