import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerElevatorFilledIcon],svg[tabler-elevator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7.293 10.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414l-.094-.083a1 1 0 0 0-1.32.083l-1.294 1.292zm2-6a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L12 9.415l1.293 1.292a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class TablerElevatorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
