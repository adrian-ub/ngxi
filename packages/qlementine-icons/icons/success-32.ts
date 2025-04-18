import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSuccess32Icon],svg[qlementine-icons-success-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.8 12.3c.304-.308.304-.808 0-1.12s-.796-.308-1.1 0l-7.75 7.86l-3.6-3.65a.77.77 0 0 0-1.1 0a.8.8 0 0 0 0 1.12l4.15 4.21a.77.77 0 0 0 1.1 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M32 16c0 8.84-7.16 16-16 16S0 24.84 0 16S7.16 0 16 0s16 7.16 16 16m-1 0c0 8.28-6.72 15-15 15S1 24.28 1 16S7.72 1 16 1s15 6.72 15 15" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsSuccess32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
