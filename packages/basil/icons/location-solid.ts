import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilLocationSolidIcon],svg[basil-location-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 10a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.774 8.877a8.04 8.04 0 0 1 8.01-7.377h.432a8.04 8.04 0 0 1 8.01 7.377a8.7 8.7 0 0 1-1.933 6.217L13.5 20.956a1.937 1.937 0 0 1-3 0l-4.792-5.862a8.7 8.7 0 0 1-1.934-6.217M12 5.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5" clip-rule="evenodd"></svg:path>`,
})
export class BasilLocationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
