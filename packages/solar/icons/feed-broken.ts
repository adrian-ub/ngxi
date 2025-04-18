import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFeedBrokenIcon],svg[solar-feed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.965 7c-.078-1.872-.328-3.02-1.137-3.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-3"></svg:path><svg:path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z"></svg:path><svg:path stroke-linecap="round" d="M7 6h5"></svg:path></svg:g>`,
})
export class SolarFeedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
