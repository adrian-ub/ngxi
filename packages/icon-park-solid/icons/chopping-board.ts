import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChoppingBoardIcon],svg[icon-park-solid-chopping-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSChoppingBoard0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M14 8h28.011A1.99 1.99 0 0 1 44 10v28c0 1.105-.883 2-1.987 2H14c-4 0-10-2-10-16S11 8 14 8"></svg:path><svg:path stroke="#000" d="M12 20v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSChoppingBoard0)"></svg:path>`,
})
export class IconParkSolidChoppingBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
