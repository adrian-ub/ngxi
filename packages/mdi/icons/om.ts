import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOmIcon],svg[mdi-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 2l-1.5 1.5L15 5l1.5-1.5zm-4 1c-1 6 6 7 9 3l-2-1.5C17 6 13 8 11 3M9 7C7 7 4.5 8.5 4.5 8.5L6 11c1-1 3-1.5 4-1c2 1-1 3-3 2v3.5c3-1.5 5 .5 4 2C8 22 3 16 3 13c-2 6 3 9 6 9s5-2 3.5-7H14c-1.5 4.5 4 9 7 3c1-2 1-8.5-4-8.5c-4 0-3 5.5-6.5 4C14 10 12 7 9 7m10 5c3 3-4 9-4 3c0-2 2-4.5 4-3"></svg:path>`,
})
export class MdiOmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
