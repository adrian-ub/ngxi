import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLocked1Icon],svg[lineicons-locked-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 15.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M12 1.25A4.75 4.75 0 0 0 7.25 6v2.696a7.5 7.5 0 1 0 9.5 0V6A4.75 4.75 0 0 0 12 1.25M12 7a7.5 7.5 0 0 0-3.25.739V6a3.25 3.25 0 0 1 6.5 0v1.739A7.5 7.5 0 0 0 12 7m0 1.5a6 6 0 1 1 0 12a6 6 0 0 1 0-12"></svg:path>`,
})
export class LineiconsLocked1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
