import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCheckAllIcon],svg[rivet-icons-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.261 13.49l6.614-10.822l-1.707-1.043l-5.43 8.885l-2.394-1.916l-1.25 1.562zM16 3h-4v2h4zm0 4h-6v2h6zm0 4v2H8v-2z"></svg:path>`,
})
export class RivetIconsCheckAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
