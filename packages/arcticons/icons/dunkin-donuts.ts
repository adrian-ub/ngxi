import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDunkinDonutsIcon],svg[arcticons-dunkin-donuts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.987 37.5V25.903L21.67 37.5V25.903M26.444 10.5v7.756a3.842 3.842 0 0 0 7.683 0V10.5m-20.14 11.597V10.5h2.61a5.074 5.074 0 0 1 5.073 5.074v1.45a5.074 5.074 0 0 1-5.074 5.073zm13.182 3.806V37.5m0-4.039l6.233-7.519m0 11.558l-4.775-5.799m7.038-5.929l-.511 2.463"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDunkinDonutsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
