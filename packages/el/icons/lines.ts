import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elLinesIcon],svg[el-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v240h1200V0zm0 480v240h1200V480zm0 480v240h1200V960z"></svg:path>`,
})
export class ElLinesIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
