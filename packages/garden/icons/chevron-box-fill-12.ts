import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronBoxFill12Icon],svg[garden-chevron-box-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M8.94 5.44L6.8 7.59c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L3.06 5.44c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 6.62l2.06-2.06c.24-.24.64-.24.88 0c.25.24.25.64 0 .88"></svg:path>`,
})
export class GardenChevronBoxFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
