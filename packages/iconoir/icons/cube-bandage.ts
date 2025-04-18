import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeBandageIcon],svg[iconoir-cube-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12 22l-8.691-4.828A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524V11"></svg:path><svg:path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 12v5.5M12 2v7m6.657 8.243l.707.707m-2.121.707l.707.707m.707-4.95l-4.243 4.243a2 2 0 0 0 0 2.828l.707.708a2 2 0 0 0 2.829 0l4.242-4.243a2 2 0 0 0 0-2.828l-.707-.708a2 2 0 0 0-2.828 0"></svg:path></svg:g>`,
})
export class IconoirCubeBandageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
