import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPaperShipIcon],svg[icon-park-solid-paper-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" stroke-linecap="round" d="m4 24l8.571 18L24 29zm40 0l-8.571 18L24 29zM13 42h22L24 29z"></svg:path><svg:path d="M12 26L24 4l12 22"></svg:path></svg:g>`,
})
export class IconParkSolidPaperShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
