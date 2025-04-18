import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowMoveDownFilledIcon],svg[tabler-arrow-move-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a1 1 0 0 1 1 1v7.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071l-.114.054l-.105.035l-.149.03L12 22l-.075-.003l-.126-.017l-.111-.03l-.111-.044l-.098-.052l-.096-.067l-.09-.08l-3-3a1 1 0 0 1 1.414-1.414L11 18.586V11a1 1 0 0 1 1-1m0-8a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 12 2"></svg:path>`,
})
export class TablerArrowMoveDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
