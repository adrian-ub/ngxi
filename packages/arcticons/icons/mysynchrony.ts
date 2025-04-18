import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMysynchronyIcon],svg[arcticons-mysynchrony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.375 4.5h7.5v39h-7.5zm10.5 0h7.5v19h-7.5zm-21.25 20h7.5v19h-7.5z"></svg:path>`,
})
export class ArcticonsMysynchronyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
