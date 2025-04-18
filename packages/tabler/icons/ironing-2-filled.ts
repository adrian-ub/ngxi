import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIroning2FilledIcon],svg[tabler-ironing-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2zm-6.449 9H10a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m4 0H14a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerIroning2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
