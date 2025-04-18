import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwindonBusIcon],svg[arcticons-swindon-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24A21.5 21.5 0 1 1 24 2.5A21.5 21.5 0 0 1 45.5 24M16.903 3.699v40.602M12.38 5.907v36.186"></svg:path><svg:circle cx="24.923" cy="15.71" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.923 18.73v11.478m12.355 0V23.06a4.33 4.33 0 0 0-4.33-4.331h0a4.33 4.33 0 0 0-4.332 4.331v7.147"></svg:path>`,
})
export class ArcticonsSwindonBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
