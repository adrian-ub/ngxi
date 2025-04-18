import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBinocularIcon],svg[iconoir-binocular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.5 14L20 9s-.5-2-2.5-2c0 0 0-2-2-2s-2 2-2 2h-3s0-2-2-2s-2 2-2 2C4.5 7 4 9 4 9l-1.5 5"></svg:path><svg:path d="M6 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m12 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M12 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirBinocularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
