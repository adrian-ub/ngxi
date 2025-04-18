import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronBoxFill16Icon],svg[garden-chevron-box-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1m-2.56 5.94L8.8 10.59c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L3.56 6.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L8 9.62l3.56-3.56c.24-.24.64-.24.88 0c.25.24.25.64 0 .88"></svg:path>`,
})
export class GardenChevronBoxFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
