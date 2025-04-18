import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneColaIcon],svg[icon-park-twotone-cola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCola0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m36 37l-2.79 6.4a1 1 0 0 1-.918.6H15.707a1 1 0 0 1-.916-.6L12 37m0-26l2.79-6.4a1 1 0 0 1 .918-.6h16.585a1 1 0 0 1 .916.6L36 11"></svg:path><svg:path fill="#555" d="M12 12a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13 22.5l6.396-1.01a8.93 8.93 0 0 0 5.218-2.815v0a8.94 8.94 0 0 1 7.168-2.907L35.5 16m-23 16.5l5.553-.252a9.54 9.54 0 0 0 7.998-5.067v0a9.54 9.54 0 0 1 5.974-4.754L35.5 21.5M36 12v20M12 16v20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCola0)"></svg:path>`,
})
export class IconParkTwotoneColaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
