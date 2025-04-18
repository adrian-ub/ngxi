import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextPositionBottomIcon],svg[proicons-text-position-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.75v13.379m-6.287-5.666l5.226 5.226c.293.293.677.44 1.061.44m6.287-5.666l-5.226 5.226c-.293.293-.677.44-1.061.44M2.75 21.25h18.5"></svg:path>`,
})
export class ProiconsTextPositionBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
