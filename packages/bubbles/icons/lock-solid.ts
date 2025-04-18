import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLockSolidIcon],svg[bubbles-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.333h-.5V4.5a4.5 4.5 0 1 0-9 0v1.833H3a1.333 1.333 0 0 0-1.333 1.334v7A1.333 1.333 0 0 0 3 16h10a1.334 1.334 0 0 0 1.333-1.333v-7A1.334 1.334 0 0 0 13 6.333m-5 6a1.333 1.333 0 1 1 0-2.666a1.333 1.333 0 0 1 0 2.666M10.833 6a.333.333 0 0 1-.333.333h-5A.333.333 0 0 1 5.167 6V4.5a2.833 2.833 0 1 1 5.666 0z"></svg:path>`,
})
export class BubblesLockSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
