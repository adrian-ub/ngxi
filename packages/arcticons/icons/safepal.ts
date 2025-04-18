import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSafepalIcon],svg[arcticons-safepal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.666 30.71V14.991h17.681l9.166-8.505H19.905L5.5 20.892zm18.668-13.42v15.718H15.653l-9.166 8.505h21.608L42.5 27.108z"></svg:path>`,
})
export class ArcticonsSafepalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
