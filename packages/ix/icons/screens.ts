import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreensIcon],svg[ix-screens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.998 149.333V384h138.667v42.667h-64v42.666h170.666v-42.666h-64V384H448V149.333zM170.665 192h234.688v149.333H170.665zm-128-128v234.667h64V256H85.331V106.667h234.667V128h42.667V64z"></svg:path>`,
})
export class IxScreensIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
