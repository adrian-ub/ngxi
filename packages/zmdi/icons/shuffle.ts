import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiShuffleIcon],svg[zmdi-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141 132l-31 30L0 51l30-30zm83-111h117v118l-43-44L30 363L0 333L268 65zm7 201l67 67l43-44v118H224l44-44l-67-67z"></svg:path>`,
})
export class ZmdiShuffleIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
