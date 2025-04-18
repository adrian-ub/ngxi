import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStopCircleFillIcon],svg[mage-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.28 13a1.56 1.56 0 0 1-1.57 1.56H9.29a1.56 1.56 0 0 1-1.57-1.56V9.28a1.56 1.56 0 0 1 1.57-1.56h5.42a1.56 1.56 0 0 1 1.57 1.56z"></svg:path>`,
})
export class MageStopCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
