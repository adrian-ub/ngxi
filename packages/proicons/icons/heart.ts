import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHeartIcon],svg[proicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M4.087 6.477a4.565 4.565 0 0 1 6.456 0L12 7.934l1.457-1.457a4.565 4.565 0 0 1 6.456 6.457l-1.457 1.456l.013.013l-6.456 6.457l-.013-.013l-.013.013l-6.456-6.457l.013-.013l-1.457-1.456a4.565 4.565 0 0 1 0-6.457Z"></svg:path>`,
})
export class ProiconsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
