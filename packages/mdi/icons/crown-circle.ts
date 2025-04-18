import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCrownCircleIcon],svg[mdi-crown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4 13.44c0 .34-.22.56-.56.56H8.56c-.34 0-.56-.22-.56-.56V15h8zM16 14H8L7 8l3 2l2-3l2 3l3-2z"></svg:path>`,
})
export class MdiCrownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
