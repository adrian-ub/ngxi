import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons12percentClubIcon],svg[arcticons-12percent-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 19.758l2.915-1.587v11.658m2.54-7.796a3.866 3.866 0 0 1 4.628-3.788c1.62.311 2.913 1.712 3.074 3.353c.12 1.22-.266 2.425-1.11 3.165c-1.562 1.371-6.592 5.066-6.592 5.066h7.723"></svg:path><svg:circle cx="28.38" cy="20.601" r="2.43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.35 26.492a2.353 2.353 0 0 0-4.502.961a2.353 2.353 0 0 0 4.502.96m-11.4 1.416l11.55-11.55"></svg:path>`,
})
export class Arcticons12percentClubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
