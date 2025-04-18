import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandIcon],svg[pepicons-pop-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.707 15.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M5 16a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M6 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M16 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0z"></svg:path><svg:path d="M11 6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g>`,
})
export class PepiconsPopExpandIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
