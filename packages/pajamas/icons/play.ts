import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasPlayIcon],svg[pajamas-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.629 7.306a.835.835 0 0 1 0 1.388l-6.401 4.177C4.695 13.218 4 12.825 4 12.176V3.824c0-.649.695-1.042 1.228-.695z"></svg:path>`,
})
export class PajamasPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
