import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPacman02Icon],svg[hugeicons-pacman-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 10a8 8 0 1 0-16 0v10.4a1.6 1.6 0 1 0 3.2 0v-.8a1.6 1.6 0 1 1 3.2 0v.8a1.6 1.6 0 1 0 3.2 0v-.8a1.6 1.6 0 1 1 3.2 0v.8a1.6 1.6 0 1 0 3.2 0zM9.009 10H9m6 0h-.009" color="currentColor"></svg:path>`,
})
export class HugeiconsPacman02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
