import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elRetweetIcon],svg[el-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300 225L0 525h225v375h450L525 750H375V525h225zm225 75l150 150h150v225H600l300 300l300-300H975V300z"></svg:path>`,
})
export class ElRetweetIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
