import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMapIcon],svg[whh-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024V640l320-128v384zm0-896L1024 0v448L704 576zM384 512l256 128v384L384 896zm0-512l256 128v448L384 448zM0 640l320-128v384L0 1024zm0-512L320 0v448L0 576z"></svg:path>`,
})
export class WhhMapIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
