import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGraphFilledIcon],svg[tabler-graph-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-2.293 6.293a1 1 0 0 0-1.414 0L12 11.585l-1.293-1.292a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L10 12.415l1.293 1.292l.094.083a1 1 0 0 0 1.32-.083L15 11.415l1.293 1.292a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class TablerGraphFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
