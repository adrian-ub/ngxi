import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOkrsIcon],svg[iconoir-okrs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4M3 5h10M3 12h10M3 19h10m3 2.243l2.121-2.122m0 0L20.243 17m-2.122 2.121L16 17m2.121 2.121l2.122 2.122"></svg:path>`,
})
export class IconoirOkrsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
