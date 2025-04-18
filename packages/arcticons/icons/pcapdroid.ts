import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcapdroidIcon],svg[arcticons-pcapdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.911 32.208l3.296-3.296L42.5 39.205L39.204 42.5z"></svg:path><svg:circle cx="19.191" cy="19.19" r="13.691" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.559 30.56l-1.691-1.691"></svg:path><svg:circle cx="19.191" cy="19.19" r="9.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.408 22.277h3.087m-3.087-5.333l1.544-.84m0 0v6.173m-11.747 0h1.85m-1.917-5.97l.374-.203m0 0v6.173m3.222-2.045a2.045 2.045 0 0 0 4.09 0v-2.083a2.045 2.045 0 0 0-4.09 0zm14.47-4.058a2.047 2.047 0 0 0-2.58 1.974v2.084a2.047 2.047 0 0 0 2.579 1.974"></svg:path>`,
})
export class ArcticonsPcapdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
