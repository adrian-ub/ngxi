import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserAddLineIcon],svg[majesticons-user-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 9a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V9zM8 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM2 9a6 6 0 1 1 12 0A6 6 0 0 1 2 9z"></svg:path><svg:path d="M2.124 19h11.752c-.547-2.197-2.86-4-5.876-4c-3.016 0-5.329 1.803-5.876 4zM0 20c0-4.005 3.732-7 8-7s8 2.995 8 7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsUserAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
