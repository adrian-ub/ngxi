import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPaintBrush16SolidIcon],svg[heroicons-paint-brush-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939a4.01 4.01 0 0 0-2.46-2.46a8 8 0 0 1 2.94-3.56zM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459a.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5A2.5 2.5 0 0 0 5.5 8"></svg:path>`,
})
export class HeroiconsPaintBrush16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
