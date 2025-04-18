import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMoveHIcon],svg[fontisto-move-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.781 14.819V9.6H24v5.219zm-9.391 0V9.6h5.219v5.219zm-9.39 0V9.6h5.219v5.219z"></svg:path>`,
})
export class FontistoMoveHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
