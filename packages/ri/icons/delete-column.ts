import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeleteColumnIcon],svg[ri-delete-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v8a5 5 0 1 1 .213 8.152L13 20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H7v14h4zm8 10h-6v2h6z"></svg:path>`,
})
export class RiDeleteColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
