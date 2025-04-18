import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextPositionTopIcon],svg[proicons-text-position-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21.25V7.871m-6.287 5.666l5.226-5.226c.293-.293.677-.44 1.061-.44m6.287 5.666l-5.226-5.226A1.5 1.5 0 0 0 12 7.87M2.75 2.75h18.5"></svg:path>`,
})
export class ProiconsTextPositionTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
