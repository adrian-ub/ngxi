import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPanoramaVIcon],svg[uil-panorama-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.27 12a21.1 21.1 0 0 1 1.64-8.58a1 1 0 0 0-.07-1A1 1 0 0 0 18 2H6a1 1 0 0 0-.84.46a1 1 0 0 0-.07 1A21.1 21.1 0 0 1 6.73 12a21.1 21.1 0 0 1-1.64 8.58a1 1 0 0 0 .07 1A1 1 0 0 0 6 22h12a1 1 0 0 0 .84-.46a1 1 0 0 0 .07-1A21.1 21.1 0 0 1 17.27 12m-.75 8h-9a24.8 24.8 0 0 0 1.25-8a24.8 24.8 0 0 0-1.29-8h9a24.8 24.8 0 0 0-1.25 8a24.8 24.8 0 0 0 1.29 8"></svg:path>`,
})
export class UilPanoramaVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
