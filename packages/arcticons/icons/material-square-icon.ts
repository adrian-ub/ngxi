import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaterialSquareIconIcon],svg[arcticons-material-square-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.019 40.704h5.962l10.741-10.741v10.74H42.5v-21.48zM24 32.944l18.5-18.487v-7.16L24 25.783L5.5 7.296v33.408h4.778V19.222z"></svg:path>`,
})
export class ArcticonsMaterialSquareIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
