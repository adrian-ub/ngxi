import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAspectRatioIcon],svg[radix-icons-aspect-ratio-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5M1 2.5A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5zM7.5 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M8 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M7.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsAspectRatioIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
