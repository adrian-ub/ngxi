import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsLayoutIcon],svg[radix-icons-layout-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2H6v11h3zm1 0v11h2.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zM2.5 2H5v11H2.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5m0-1A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsLayoutIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
