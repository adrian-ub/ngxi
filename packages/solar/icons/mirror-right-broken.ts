import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightBrokenIcon],svg[solar-mirror-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 21c4.243 0 6.364 0 7.682-1.318S21 16.242 21 12m-9-9c4.243 0 6.364 0 7.682 1.318c.816.816 1.127 1.939 1.245 3.682"></svg:path><svg:path stroke-dasharray="2.5 3" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"></svg:path><svg:path d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
