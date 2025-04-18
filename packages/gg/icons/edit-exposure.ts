import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditExposureIcon],svg[gg-edit-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9-5v2H9v2h2v2h2v-2h2V9h-2V7zm-2 8v2h6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgEditExposureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
