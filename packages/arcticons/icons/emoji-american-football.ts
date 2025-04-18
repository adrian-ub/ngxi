import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAmericanFootballIcon],svg[arcticons-emoji-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.942 5.5C17.59 9.206 13.373 16.096 13.373 23.971S17.647 38.794 24 42.5h.058c6.295-3.706 10.569-10.596 10.569-18.471c0-7.933-4.274-14.823-10.685-18.529m.058.116v36.768m1.675-18.413h-3.35m3.35-2.895h-3.35m3.35 5.79h-3.35m-4.331 10.249h12.07M16.838 12.448h14.324"></svg:path>`,
})
export class ArcticonsEmojiAmericanFootballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
