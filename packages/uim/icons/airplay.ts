import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAirplayIcon],svg[uim-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="20" height="15" x="2" y="3" fill="currentColor" opacity=".5" rx="3"></svg:rect><svg:path fill="currentColor" d="M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21"></svg:path>`,
})
export class UimAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
