import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsMobileIcon],svg[radix-icons-mobile-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10A1.5 1.5 0 0 0 4.5 14h6a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 10.5 1zM6 11.65a.35.35 0 1 0 0 .7h3a.35.35 0 1 0 0-.7z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsMobileIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
