import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShuffleIcon],svg[iconoir-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"></svg:path><svg:path d="m20 5l2 2l-2 2m2 9c-3 0-8.5 0-10.5-5.5S5 7 2 7"></svg:path><svg:path d="m20 20l2-2l-2-2"></svg:path></svg:g>`,
})
export class IconoirShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
