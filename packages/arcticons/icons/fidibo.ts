import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFidiboIcon],svg[arcticons-fidibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.008 40.474a7.842 7.842 0 0 1 0-15.684h27.816M14.008 40.475h27.816"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.506 35.259a2.628 2.628 0 0 1 0-5.256H38.49m-23.983 5.256H38.49"></svg:path><svg:ellipse cx="11.887" cy="13.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.387" ry="6.395"></svg:ellipse><svg:ellipse cx="36.112" cy="13.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.387" ry="6.395"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.84 20.314h9.272m-24.225 0h9.27"></svg:path>`,
})
export class ArcticonsFidiboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
