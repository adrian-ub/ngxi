import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmHeartIcon],svg[charm-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.25 9.75c3 3.5 4.75 4.5 4.75 4.5s1.75-1 4.75-4.5s1-7-1.5-7s-3.25 3-3.25 3s-.75-3-3.25-3s-4.5 3.5-1.5 7"></svg:path>`,
})
export class CharmHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
