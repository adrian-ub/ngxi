import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpikeEmailIcon],svg[arcticons-spike-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.819 24a11.807 11.807 0 1 0-.672 3.937A11.8 11.8 0 0 0 35.82 24m1.902 16.552q.802-.665 1.537-1.406"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24A21.5 21.5 0 1 0 5.802 35.412l-1.334 8.12l8.12-1.334a21.45 21.45 0 0 0 19.78 1.612"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.145 27.936c-1.444 3.522.907 5.417 2.93 5.877c2.467.56 7.425-2.019 7.425-9.813"></svg:path>`,
})
export class ArcticonsSpikeEmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
