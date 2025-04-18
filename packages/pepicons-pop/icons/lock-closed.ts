import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLockClosedIcon],svg[pepicons-pop-lock-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M13 7H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4m-8 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 4a4 4 0 0 0-8 0v5h8zm-2 0v3H8V4a2 2 0 1 1 4 0"></svg:path></svg:g>`,
})
export class PepiconsPopLockClosedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
