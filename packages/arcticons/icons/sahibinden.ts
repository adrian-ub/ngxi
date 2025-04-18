import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSahibindenIcon],svg[arcticons-sahibinden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.238 29.439c0-10.667-17.143-6.549-17.143-12.121c0-3.753 10.194-3.934 10.194.559c4.296 0 2.876.013 6.044.013c0-10.11-22.877-11.193-22.877.44c0 9.439 16.876 4.89 16.876 11.764c0 4.088-10.979 5.127-10.979-1.157h-6.592c0 12.685 24.477 11.368 24.477.502"></svg:path>`,
})
export class ArcticonsSahibindenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
