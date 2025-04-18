import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsFullscreenAltIcon],svg[dashicons-fullscreen-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H2v5l1.8-1.8L6.5 8L8 6.5L5.2 3.8zm6 0l1.8 1.8L12 6.5L13.5 8l2.7-2.7L18 7V2zm.5 10L12 13.5l2.7 2.7L13 18h5v-5l-1.8 1.8zm-7 0l-2.7 2.7L2 13v5h5l-1.8-1.8L8 13.5z"></svg:path>`,
})
export class DashiconsFullscreenAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
