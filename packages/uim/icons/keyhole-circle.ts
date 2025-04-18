import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimKeyholeCircleIcon],svg[uim-keyhole-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.99 1.99 0 0 0 14 10"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0" opacity=".5"></svg:path>`,
})
export class UimKeyholeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
