import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSimCardIcon],svg[majesticons-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.707 2.879A3 3 0 0 1 10.828 2H17a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6.998A3 3 0 0 1 4 19V8.828a3 3 0 0 1 .879-2.12l3.828-3.83zM14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
