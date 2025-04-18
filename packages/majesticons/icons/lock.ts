import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLockIcon],svg[majesticons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v3"></svg:path></svg:g>`,
})
export class MajesticonsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
