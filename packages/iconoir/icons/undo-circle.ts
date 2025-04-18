import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUndoCircleIcon],svg[iconoir-undo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 10.625h7.2q0 0 0 0s2.8 0 2.8 3C17 17 14.2 17 14.2 17h-.8"></svg:path><svg:path d="M10.5 14L7 10.625L10.5 7"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirUndoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
