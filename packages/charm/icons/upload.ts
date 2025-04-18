import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmUploadIcon],svg[charm-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 2.75h9m-8.5 6.5l4-3.5l4 3.5m-4 5v-8.5"></svg:path>`,
})
export class CharmUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
