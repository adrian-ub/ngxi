import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRedoCircleIcon],svg[iconoir-redo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 10.625H9.8q0 0 0 0s-2.8 0-2.8 3C7 17 9.8 17 9.8 17h.8"></svg:path><svg:path d="m13.5 14l3.5-3.375L13.5 7"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirRedoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
