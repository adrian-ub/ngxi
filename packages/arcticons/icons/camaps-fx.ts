import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCamapsFxIcon],svg[arcticons-camaps-fx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.5 32.5a3 3 0 0 0-3-3h-10c-6.627 0-12-5.373-12-12s5.373-12 12-12s12 5.373 12 12v10a3 3 0 0 0 3 3h4a6 6 0 1 1-6 6z"></svg:path>`,
})
export class ArcticonsCamapsFxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
