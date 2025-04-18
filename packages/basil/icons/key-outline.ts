import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilKeyOutlineIcon],svg[basil-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 6.25a5.75 5.75 0 1 0 5.05 8.5h3.2V17c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-2.25H22a.75.75 0 0 0 .75-.75v-3A1.75 1.75 0 0 0 21 9.25h-8.95a5.75 5.75 0 0 0-5.05-3M2.75 12a4.25 4.25 0 0 1 8.147-1.7a.75.75 0 0 0 .687.45H21a.25.25 0 0 1 .25.25v2.25H19.5a.75.75 0 0 0-.75.75v2.25h-2V14a.75.75 0 0 0-.75-.75h-4.416a.75.75 0 0 0-.687.45A4.251 4.251 0 0 1 2.75 12" clip-rule="evenodd"></svg:path>`,
})
export class BasilKeyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
