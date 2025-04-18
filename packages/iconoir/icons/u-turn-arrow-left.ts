import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUTurnArrowLeftIcon],svg[iconoir-u-turn-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 14V8a5 5 0 0 1 10 0v13"></svg:path><svg:path d="m12 11l-4 4l-4-4"></svg:path></svg:g>`,
})
export class IconoirUTurnArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
