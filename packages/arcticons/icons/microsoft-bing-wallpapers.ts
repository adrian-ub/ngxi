import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftBingWallpapersIcon],svg[arcticons-microsoft-bing-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="23.63" height="39" x="12.185" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.8" ry="1.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.69 6.99h5.66"></svg:path><svg:circle cx="20.36" cy="6.99" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.885 25.333V31m0-5.667L20.67 17l9.618 12.069m0 0L25.84 20.6l1.407-2.13l5.868 8.198v4.299L14.885 31"></svg:path>`,
})
export class ArcticonsMicrosoftBingWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
