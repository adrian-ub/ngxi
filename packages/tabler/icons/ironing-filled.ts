import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIroningFilledIcon],svg[tabler-ironing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.459 5a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2z"></svg:path>`,
})
export class TablerIroningFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
