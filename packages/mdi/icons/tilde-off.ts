import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTildeOffIcon],svg[mdi-tilde-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L10.78 12.67C10 12.03 9.27 11.5 8.5 11.5c-4 0-4 3.5-4 3.5H2s0-5.41 5.16-5.95L1.11 3l1.28-1.27l7.64 7.64L15.64 15h-.01l6.48 6.46zM22 9h-2.5s0 3.38-3.81 3.5l2.26 2.25C22 13.62 22 9 22 9"></svg:path>`,
})
export class MdiTildeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
