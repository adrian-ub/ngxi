import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolRetweetIcon],svg[websymbol-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1120 481h240l-300 320l-300-320h240V241H600L483 121h636zM760 681l117 120H241l-1-360H0l300-320l300 320H360v240z"></svg:path>`,
})
export class WebsymbolRetweetIcon {
  readonly viewBox = input("0 0 1360 1000")
  readonly width = input("1.36em")
  readonly height = input("1em")
}
