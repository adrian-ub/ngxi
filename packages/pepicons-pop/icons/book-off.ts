import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookOffIcon],svg[pepicons-pop-book-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 5.297a1 1 0 0 0-.838-.987L2.323 3.026A2 2 0 0 0 0 5v9.737a2 2 0 0 0 1.69 1.975l8.155 1.276A1 1 0 0 0 11 17zm-9 9.44V5l7 1.147v9.684z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 5a2 2 0 0 0-2.323-1.974L9.838 4.31A1 1 0 0 0 9 5.297V17a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 20 14.737zm-2 9.737l-7 1.094V6.147L18 5z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBookOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
