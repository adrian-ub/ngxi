import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasClearAllIcon],svg[pajamas-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.963 7.23A8 8 0 0 1 .044 8.841a.75.75 0 0 1 1.492-.158a6.5 6.5 0 1 0 9.964-6.16V4.25a.75.75 0 0 1-1.5 0V0h4.25a.75.75 0 0 1 0 1.5h-1.586a8 8 0 0 1 3.299 5.73M7 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2.25.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0M1.5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasClearAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
