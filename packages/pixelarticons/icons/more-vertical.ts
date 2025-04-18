import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoreVerticalIcon],svg[pixelarticons-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v6H9V1zm-2 2h-2v2h2zm2 6v6H9V9zm-2 2h-2v2h2zm2 6v6H9v-6zm-2 2h-2v2h2z"></svg:path>`,
})
export class PixelarticonsMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
