import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMoveXIcon],svg[pepicons-pop-move-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.027 5.232a1 1 0 0 1 1.408.128l3.333 4a1 1 0 1 1-1.536 1.28l-3.334-4a1 1 0 0 1 .129-1.408"></svg:path><svg:path d="M13.027 14.768a1 1 0 0 1-.129-1.408l3.334-4a1 1 0 1 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.408.128"></svg:path><svg:path d="M16 10a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1m-9.026 4.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408"></svg:path><svg:path d="M6.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128"></svg:path><svg:path d="M4 10a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class PepiconsPopMoveXIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
