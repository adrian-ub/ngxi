import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosProgressIcon],svg[logos-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5CE500" d="M63.017 260.487L2.769 223.492l60.248-35.871zm30.83 16.292V172.754L0 115.906l65.32-38.532l91.541 55.952v104.53zm90.932-12.793V119.229L57.516 41.861L128.24 0L256 74.049V221.17z"></svg:path>`,
})
export class LogosProgressIcon {
  readonly viewBox = input("0 0 256 277")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
