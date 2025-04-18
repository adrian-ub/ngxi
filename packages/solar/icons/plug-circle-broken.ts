import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleBrokenIcon],svg[solar-plug-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15.108v5.042c0 1.114-.905 2.038-1.987 1.817C5.442 21.038 2 16.966 2 12.083A10.1 10.1 0 0 1 3.362 7m13.002 14.158A10.09 10.09 0 0 0 22 12.083C22 6.514 17.523 2 12 2a9.9 9.9 0 0 0-5 1.349"></svg:path><svg:path d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M13.5 11V9m-3 2V9"></svg:path></svg:g>`,
})
export class SolarPlugCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
