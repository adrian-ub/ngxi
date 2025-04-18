import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerBoldIcon],svg[ph-paint-roller-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 84h-20V64a20 20 0 0 0-20-20H52a20 20 0 0 0-20 20v20H16a12 12 0 0 0 0 24h16v20a20 20 0 0 0 20 20h140a20 20 0 0 0 20-20v-20h16v47l-97.5 27.8A20.09 20.09 0 0 0 116 202v30a12 12 0 0 0 24 0v-26.95l97.5-27.85A20.09 20.09 0 0 0 252 158v-54a20 20 0 0 0-20-20m-44 40H56V68h132Z"></svg:path>`,
})
export class PhPaintRollerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
