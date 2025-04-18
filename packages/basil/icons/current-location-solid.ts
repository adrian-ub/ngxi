import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilCurrentLocationSolidIcon],svg[basil-current-location-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.784a8.25 8.25 0 0 0-7.466 7.466H2a.75.75 0 0 0 0 1.5h1.784a8.25 8.25 0 0 0 7.466 7.466V22a.75.75 0 0 0 1.5 0v-1.784a8.25 8.25 0 0 0 7.466-7.466H22a.75.75 0 0 0 0-1.5h-1.784a8.25 8.25 0 0 0-7.466-7.466zm-4.5 10a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class BasilCurrentLocationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
