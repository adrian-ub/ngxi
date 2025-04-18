import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMoveOneIcon],svg[icon-park-twotone-move-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMoveOne0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="m8 6l35 19l-19 2l-10.005 17z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMoveOne0)"></svg:path>`,
})
export class IconParkTwotoneMoveOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
