import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNoAdultContentIcon],svg[ic-round-no-adult-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.92 7.92 0 0 1 12 4c4.41 0 8 3.59 8 8c0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.87 7.87 0 0 1 12 20c-4.41 0-8-3.59-8-8"></svg:path><svg:path fill="currentColor" d="m14.25 14l-1.5-2l1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2l-1.5 2h1.5l.75-1l.75 1zM8 10l-.75 1l-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4l.75-1l.75 1H19l-1.5-2l1.5-2h-1.5l-.75 1l-.75-1h-1.5l1.5 2l-1.5 2z"></svg:path>`,
})
export class IcRoundNoAdultContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
