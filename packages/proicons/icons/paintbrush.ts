import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPaintbrushIcon],svg[proicons-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.32 5.75a3 3 0 0 1 3-3h7.36a3 3 0 0 1 3 3V12H5.32zM18.68 12H5.32v2.611a1.5 1.5 0 0 0 1.5 1.5h3.38v3.34a1.799 1.799 0 0 0 3.598 0v-3.34h3.382a1.5 1.5 0 0 0 1.5-1.5zM15.5 2.75V6.5m-3-3.75v2.5"></svg:path>`,
})
export class ProiconsPaintbrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
