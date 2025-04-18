import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlagsIcon],svg[arcticons-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 28.604c13.168 7.685 25.352-7.97 37.999-.096M5 19.587c13.168 7.684 25.353-7.972 38-.096"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 10.569c13.168 7.684 25.353-7.972 38-.096h-.001v27.053h0C30.353 29.651 18.168 45.307 5 37.622h0z"></svg:path>`,
})
export class ArcticonsFlagsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
