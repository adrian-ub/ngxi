import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsGooglePlayIcon],svg[fa-brands-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256zm425.2 225.6l-58.9-34.1l-65.7 64.5l65.7 64.5l60.1-34.1c18-14.3 18-46.5-1.2-60.8M104.6 499l280.8-161.2l-60.1-60.1z"></svg:path>`,
})
export class FaBrandsGooglePlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
