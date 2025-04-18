import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSeekerIcon],svg[arcticons-seeker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.336 28.58s4.168 3.371 5.3 3.666m.01-8.302a13.516 13.516 0 0 1 24.267-7.821l6.565.353c1.068.057 1.694.85 1.09 1.67c-.329.328-4.911 5.498-4.911 5.498c-.916 1.142-6.094 6.174 4.225 14.847"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.637 32.246a57 57 0 0 1 .015-8.475m11.418-4.729a2.754 2.754 0 1 1 5.396-1.102"></svg:path>`,
})
export class ArcticonsSeekerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
