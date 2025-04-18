import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elThLargeIcon],svg[el-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v525h525V0zm675 0v525h525V0zM0 675v525h525V675zm675 0v525h525V675z"></svg:path>`,
})
export class ElThLargeIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
