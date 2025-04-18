import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRam2FillIcon],svg[ri-ram-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1v2a1 1 0 0 1-1 1h-7.414l-1-1h-1.172l-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 11v1h5.586l1-1zm9.414 0l1 1H20v-1zM7 9H5v3h2zm2 0v3h2V9zm6 0h-2v3h2zm2 0v3h2V9z"></svg:path>`,
})
export class RiRam2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
