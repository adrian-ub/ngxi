import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSiiloIcon],svg[arcticons-siilo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.812 32.73a7.07 7.07 0 0 0 5.837 2.534h3.502a5.635 5.635 0 1 0 0-11.264h-3.794a5.754 5.754 0 0 1-5.837-5.632a5.754 5.754 0 0 1 5.837-5.632h3.503c2.627 0 4.378.564 5.837 2.535"></svg:path><svg:circle cx="35.235" cy="33.018" r="2.246" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSiiloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
