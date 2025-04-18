import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChurchIcon],svg[majesticons-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1.5l7.6 5.7A1 1 0 0 1 20 16h-1v3h2a1 1 0 1 1 0 2h-7v-3a2 2 0 1 0-4 0v3H3a1 1 0 1 1 0-2h2v-3H4a1 1 0 0 1-.6-1.8L11 8.5V7h-1a1 1 0 0 1 0-2h1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
