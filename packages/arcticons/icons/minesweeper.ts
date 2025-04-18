import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinesweeperIcon],svg[arcticons-minesweeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M15.24 22.65a2.2 2.2 0 1 1 2.19-2.19a2.19 2.19 0 0 1-2.19 2.19ZM21 18.89a3 3 0 1 1 3-3a3 3 0 0 1-3 3Z"></svg:path><svg:circle cx="24.01" cy="24" r="15.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v5.77m21.51 15.71h-5.76M24.03 45.5v-5.77M2.51 24.02h5.77m26.86-11.14l2.04-2.04m-2.04 24.28l2.04 2.04m-24.29-2.04l-2.04 2.04m2.04-24.28l-2.04-2.04"></svg:path>`,
})
export class ArcticonsMinesweeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
