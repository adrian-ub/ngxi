import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPresentationFilledIcon],svg[tabler-presentation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1-3 3h-5v2h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 1 1 0-2zm-4.293 4.293a1 1 0 0 0-1.414 0L13 9.585l-1.293-1.292a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L11 10.415l1.293 1.292a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class TablerPresentationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
