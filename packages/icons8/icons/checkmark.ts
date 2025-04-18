import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8CheckmarkIcon],svg[icons8-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.28 6.28L11 23.563l-7.28-7.28l-1.44 1.437l8 8l.72.686l.72-.687l18-18l-1.44-1.44z"></svg:path>`,
})
export class Icons8CheckmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
