import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUTurnArrowRightIcon],svg[iconoir-u-turn-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 14V8A5 5 0 0 0 6 8v13"></svg:path><svg:path d="m12 11l4 4l4-4"></svg:path></svg:g>`,
})
export class IconoirUTurnArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
