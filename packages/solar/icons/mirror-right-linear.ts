import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightLinearIcon],svg[solar-mirror-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 21h1c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3h-1"></svg:path><svg:path stroke-dasharray="2.5 3" stroke-linecap="round" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"></svg:path><svg:path stroke-linecap="round" d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
