import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOvalFilledIcon],svg[tabler-oval-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.972 0 7 4.542 7 10s-3.028 10-7 10c-3.9 0-6.89-4.379-6.997-9.703L5 12l.003-.297C5.11 6.38 8.1 2 12 2"></svg:path>`,
})
export class TablerOvalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
