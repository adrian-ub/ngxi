import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsEjectIcon],svg[majesticons-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5 15l7-10l7 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19h14M12 5L5 15h14z"></svg:path></svg:g>`,
})
export class MajesticonsEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
