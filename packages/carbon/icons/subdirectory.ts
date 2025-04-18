import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSubdirectoryIcon],svg[carbon-subdirectory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 20l1.414 1.414L7.828 24H26V4h2v20c0 1.103-.897 2-2 2H7.828l2.586 2.586L9 30l-5-5z"></svg:path>`,
})
export class CarbonSubdirectoryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
