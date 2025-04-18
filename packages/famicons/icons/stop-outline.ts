import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsStopOutlineIcon],svg[famicons-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="320" x="96" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="24" ry="24"></svg:rect>`,
})
export class FamiconsStopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
