import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalisteniappIcon],svg[arcticons-calisteniapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5v37h7.4V12.9h22.2v29.6h7.4v-37h-7.4v3.7H12.9V5.5zm3.7 33.3v-7.796"></svg:path><svg:circle cx="9.2" cy="28.504" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsCalisteniappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
