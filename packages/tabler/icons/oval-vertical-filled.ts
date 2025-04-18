import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOvalVerticalFilledIcon],svg[tabler-oval-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5C6.543 5 2 8.028 2 12s4.543 7 10 7s10-3.028 10-7s-4.543-7-10-7"></svg:path>`,
})
export class TablerOvalVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
