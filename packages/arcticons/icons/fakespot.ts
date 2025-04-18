import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFakespotIcon],svg[arcticons-fakespot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.404 17.226c3.57 10.75-1.816 22.428-12.31 26.692s-22.499-.346-27.44-10.54C-.29 23.187 3.526 10.907 13.374 5.309s22.351-2.594 28.581 6.867l-16.48 21.823l-11.511-6.646"></svg:path>`,
})
export class ArcticonsFakespotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
