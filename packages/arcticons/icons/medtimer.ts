import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMedtimerIcon],svg[arcticons-medtimer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6.439" height="3.216" x="6.618" y="7.035" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".64" ry=".64" transform="rotate(-44.72 9.838 8.643)"></svg:rect><svg:rect width="3.216" height="6.439" x="29.074" y="5.432" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".64" ry=".64" transform="rotate(-45.28 30.682 8.652)"></svg:rect><svg:circle cx="20.326" cy="19.415" r="11.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.051 27.792l-.765 3.19m15.315-3.19l.765 3.19"></svg:path><svg:circle cx="20.326" cy="19.415" r="1.057" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.326 11.271v7.087m1.063 1.057h5.084m8.304 6.465a3.639 3.639 0 1 1 5.798 4.397m-8.199 10.781a3.639 3.639 0 0 1-5.8-4.394l.001-.003l8.2-10.781m5.799 4.397l-8.2 10.781m4.1-5.39l-5.799-4.397"></svg:path>`,
})
export class ArcticonsMedtimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
