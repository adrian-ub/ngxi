import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundpeatsIcon],svg[arcticons-soundpeats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.11 24.595c2.998 7.536 7.688 13.729 15.876 17.905c8.772-4.474 13.53-11.263 16.491-19.54L7.523 14.425V5.5h32.653v7.035"></svg:path>`,
})
export class ArcticonsSoundpeatsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
