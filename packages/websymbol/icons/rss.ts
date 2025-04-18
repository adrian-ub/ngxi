import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolRssIcon],svg[websymbol-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 1001H807q0-164-64-314T571 429T313.5 257T0 193V1q203 0 388 79.5T707 294t213.5 319t79.5 388m-340 0H468q0-194-137-331T0 533V341q179 0 331 88.5T571.5 670t88.5 331M250 876q0 52-36.5 88.5T125 1001t-88.5-36.5T0 876t36.5-88.5T125 751t88.5 36.5T250 876"></svg:path>`,
})
export class WebsymbolRssIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
