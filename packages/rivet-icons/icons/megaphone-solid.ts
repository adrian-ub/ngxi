import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsMegaphoneSolidIcon],svg[rivet-icons-megaphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.382v4.382c.614.55 1 1.348 1 2.236a3 3 0 0 1-1 2.236v4.382l-5.025-2.512A1 1 0 0 0 9.528 12H5.46l-3.352 3.91L.59 14.608l2.24-2.613A3 3 0 0 1 0 9V7a3 3 0 0 1 3-3h6.528a1 1 0 0 0 .447-.106zM7 10V6H5v4z"></svg:path>`,
})
export class RivetIconsMegaphoneSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
