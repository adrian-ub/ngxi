import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyphonakIcon],svg[arcticons-myphonak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.402 32.42a13.877 13.877 0 1 1 7.83-18.905"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.504c-3.795 5.266-5.407 10.091-5.345 14.579c.066 4.724 1.988 9.074 5.174 13.17M19.5 5.504c5.579 6.806 8.887 17.587-.171 27.749"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.812 18.437c7.627 4.203 15.482 3.215 19.09 2.701"></svg:path><svg:rect width="13.877" height="24.978" x="28.347" y="17.522" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.974"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.743 36.275h2.875"></svg:path>`,
})
export class ArcticonsMyphonakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
