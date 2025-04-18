import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatRoundedrectangleIcon],svg[topcoat-roundedrectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4.5c-6.939 0-11 4.47-11 11v11c0 6.971 3.859 11 11 11h18c7.4 0 11-4.029 11-11v-11c0-6.97-4.061-11-11-11z"></svg:path>`,
})
export class TopcoatRoundedrectangleIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
