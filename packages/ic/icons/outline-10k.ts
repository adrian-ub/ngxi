import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutline10kIcon],svg[ic-outline-10k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 6v10H5v-8.5h1V15h1.5V9H5V5h14z"></svg:path><svg:path fill="currentColor" d="M15.5 11.25V9H14v6h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75zM9.5 15H12c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5h1.5v3H10z"></svg:path>`,
})
export class IcOutline10kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
