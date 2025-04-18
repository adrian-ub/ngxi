import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePaperShipIcon],svg[icon-park-twotone-paper-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPaperShip0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" stroke-linecap="round" d="m4 24l8.571 18L24 29zm40 0l-8.571 18L24 29zM13 42h22L24 29z"></svg:path><svg:path d="M12 26L24 4l12 22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPaperShip0)"></svg:path>`,
})
export class IconParkTwotonePaperShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
