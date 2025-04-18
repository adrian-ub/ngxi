import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMoreVertCircleIcon],svg[iconoir-more-vert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirMoreVertCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
