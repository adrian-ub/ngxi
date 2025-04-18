import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarOffLineIcon],svg[ri-star-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.413 8.792l-5.392 4.986l-1.415-1.415l2.266-2.096l-4.833-.573l-2.038-4.419l-.784 1.699L9.71 5.467L12 .5l3.386 7.34zM8.46 9.872l-3.33.395l3.573 3.305l-.948 4.773L12 15.968l4.246 2.377l-.17-.854zm10.163 10.164l.432 2.172l-7.053-3.948l-7.054 3.948l1.575-7.928L.588 8.792l6.07-.72l-5.264-5.264l1.414-1.415l19.8 19.8l-1.415 1.414z"></svg:path>`,
})
export class RiStarOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
