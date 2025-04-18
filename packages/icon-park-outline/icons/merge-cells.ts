import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMergeCellsIcon],svg[icon-park-outline-merge-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M20 14V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9m8 0v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H29a1 1 0 0 0-1 1v9m0 10h16M5 24h15"></svg:path><svg:path stroke-linejoin="round" d="m32.749 28.818l-1.592-1.59l-3.181-3.183l3.182-3.182l1.59-1.59m-17.373 9.545l1.591-1.59l3.182-3.183l-3.182-3.182l-1.591-1.59"></svg:path></svg:g>`,
})
export class IconParkOutlineMergeCellsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
