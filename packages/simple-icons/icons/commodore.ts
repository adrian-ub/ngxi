import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCommodoreIcon],svg[simple-icons-commodore-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.202.798C5.016.798 0 5.814 0 12s5.016 11.202 11.202 11.202c1.094 0 2.153-.157 3.154-.45v-5.335a6.27 6.27 0 1 1 0-10.839v-5.33c-1-.293-2.057-.45-3.154-.45m3.375 6.343v4.304h5.27L24 7.14Zm-.037 5.377v4.304h9.423l-4.156-4.304z"></svg:path>`,
})
export class SimpleIconsCommodoreIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
