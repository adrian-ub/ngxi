import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesViewOffOutlineIcon],svg[bubbles-view-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2.783 21l18.75-18M8.964 19.05A10 10 0 0 0 12 19.5c4.1.069 8.258-2.813 10.824-5.637a1.663 1.663 0 0 0 0-2.226A20.6 20.6 0 0 0 19.75 8.88m-5.337-2.598A9.6 9.6 0 0 0 12 6c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 0 0 0 2.226a21 21 0 0 0 2.6 2.4"></svg:path><svg:path d="M8.25 12.75A3.75 3.75 0 0 1 12 9m3.75 3.749A3.75 3.75 0 0 1 12 16.5"></svg:path></svg:g>`,
})
export class BubblesViewOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
