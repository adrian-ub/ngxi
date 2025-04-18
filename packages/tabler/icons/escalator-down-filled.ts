import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEscalatorDownFilledIcon],svg[tabler-escalator-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.233 6a3 3 0 0 1 2.006.77L18.384 15H19.5a3.5 3.5 0 0 1 3.495 3.308L23 18.5a3.5 3.5 0 0 1-3.5 3.5h-2.733a3 3 0 0 1-2.006-.77L5.617 13H4.5a3.5 3.5 0 0 1-3.495-3.308L1 9.5A3.5 3.5 0 0 1 4.5 6zM18 2a1 1 0 0 1 1 1v4.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071l-.114.054l-.105.035l-.149.03L18 11l-.075-.003l-.126-.017l-.111-.03l-.111-.044l-.098-.052l-.096-.067l-.09-.08l-3-3a1 1 0 1 1 1.414-1.414L17 7.586V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerEscalatorDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
