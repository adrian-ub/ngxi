import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBoldIcon],svg[icomoon-free-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.061 7.573A3.98 3.98 0 0 0 12 5c0-2.206-1.794-4-4-4H3v14h6c2.206 0 4-1.794 4-4a4 4 0 0 0-1.939-3.427M6 3h1.586c.874 0 1.586.897 1.586 2s-.711 2-1.586 2H6zm2.484 10H6V9h2.484c.913 0 1.656.897 1.656 2s-.743 2-1.656 2"></svg:path>`,
})
export class IcomoonFreeBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
