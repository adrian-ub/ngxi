import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTGraffitiIcon],svg[arcticons-t-graffiti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.935 12.466c25.248 9.018 37.42-1.013 33.363-5.409s-17.132 0-17.132 19.838c0 9.918 1.803 17.132 13.525 15.328"></svg:path>`,
})
export class ArcticonsTGraffitiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
