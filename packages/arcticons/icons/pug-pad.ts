import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPugPadIcon],svg[arcticons-pug-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.458 4.5h21.083v22.847H13.458z"></svg:path><svg:path d="M13.458 6.504h21.083v3.647H13.458zm0 20.829L23.8 43.5l10.742-16.139zm7.673 11.535l5.357.045"></svg:path></svg:g>`,
})
export class ArcticonsPugPadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
