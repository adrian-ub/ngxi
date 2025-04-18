import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookCheckIcon],svg[mdi-book-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 22.16l-2.75-3L15.16 18l1.59 1.59L20.34 16l1.16 1.41zM6 22a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.34A6.005 6.005 0 0 0 12.8 22z"></svg:path>`,
})
export class MdiBookCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
