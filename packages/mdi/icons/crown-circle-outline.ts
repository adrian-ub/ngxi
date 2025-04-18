import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCrownCircleOutlineIcon],svg[mdi-crown-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m-4-6L7 8l3 2l2-3l2 3l3-2l-1 6zm.56 2c-.34 0-.56-.22-.56-.56V15h8v.44c0 .34-.22.56-.56.56z"></svg:path>`,
})
export class MdiCrownCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
