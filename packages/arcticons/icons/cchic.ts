import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCchicIcon],svg[arcticons-cchic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.094 27.236c.68.005 2.29.01 3.161.02C43.685 37.586 34.767 45.5 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5c10.764 0 19.681 7.91 21.254 18.236c-.802.02-2.51.023-3.162.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.094 27.236C40.656 32.85 35.563 37 29.5 37c-7.18 0-13-5.82-13-13s5.82-13 13-13c6.06 0 11.151 4.146 12.592 9.756"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.377 21.691c.117.495.306 1.27.306 2.309c0 1.027-.183 1.79-.306 2.299c-.506.014-1.586-.001-2.212 0a8 8 0 1 1-.003-4.608z"></svg:path>`,
})
export class ArcticonsCchicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
