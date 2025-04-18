import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPan02Icon],svg[hugeicons-pan-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.556 13H9.444C9.2 13 9 13.249 9 13.556C9 16.01 10.592 18 12.556 18h4.888C19.408 18 21 16.01 21 13.556c0-.307-.199-.556-.444-.556M9 13l-2-2M2.368 6.368c.49-.49 1.286-.49 1.777 0l2.487 2.487a1.256 1.256 0 1 1-1.777 1.777L2.368 8.145a1.256 1.256 0 0 1 0-1.777" color="currentColor"></svg:path>`,
})
export class HugeiconsPan02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
