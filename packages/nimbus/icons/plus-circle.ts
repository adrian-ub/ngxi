import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusPlusCircleIcon],svg[nimbus-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.64 4.33H7.39v3.05H4.34v1.25h3.05v3.05h1.25V8.63h3.05V7.38H8.64z"></svg:path><svg:path fill="currentColor" d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8A7.77 7.77 0 0 0 8 .5m0 13.75A6.52 6.52 0 0 1 1.25 8A6.52 6.52 0 0 1 8 1.75A6.52 6.52 0 0 1 14.75 8A6.52 6.52 0 0 1 8 14.25"></svg:path>`,
})
export class NimbusPlusCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
