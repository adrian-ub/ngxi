import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsOverlineIcon],svg[radix-icons-overline-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1.1a.4.4 0 1 0 0 .8h8a.4.4 0 0 0 0-.8zM5 4.25a.5.5 0 0 0-1 0v5.3a3.5 3.5 0 0 0 7 0v-5.3a.5.5 0 0 0-1 0v5.3a2.5 2.5 0 0 1-5 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsOverlineIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
