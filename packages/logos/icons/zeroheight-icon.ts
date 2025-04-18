import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZeroheightIconIcon],svg[logos-zeroheight-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosZeroheightIcon0" x1="15.751%" x2="84.249%" y1="100%" y2="0%"><svg:stop offset="0%" stop-color="#EC407A"></svg:stop><svg:stop offset="100%" stop-color="#FFA000"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosZeroheightIcon0)" d="m22.627 0l22.64 48.24H0zM0 55.862h45.268v215.841H0zm0 223.463h45.268v26.242H0zm80.54-231.21l31.352-31.323L256 161.012l-144.834 148.31l-31.295-29.732l113.762-118.369L80.541 48.13z"></svg:path>`,
})
export class LogosZeroheightIconIcon {
  readonly viewBox = input("0 0 256 310")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
