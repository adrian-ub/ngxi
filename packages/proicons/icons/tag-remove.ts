import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTagRemoveIcon],svg[proicons-tag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-2.352-7.852a.5.5 0 0 1 .707 0L6.5 16.793l1.645-1.645a.5.5 0 1 1 .707.707L7.207 17.5l1.645 1.645a.5.5 0 1 1-.707.707L6.5 18.207l-1.645 1.645a.5.5 0 1 1-.707-.707L5.793 17.5l-1.645-1.645a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path><svg:circle cx="8.658" cy="6.738" r="1.277" fill="currentColor" transform="rotate(-45 8.658 6.738)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.668 10.5V5.748a3 3 0 0 1 3-3h5.2a2.5 2.5 0 0 1 1.768.732l6.445 6.446a4 4 0 0 1 0 5.656l-3.579 3.58a4 4 0 0 1-4.172.94"></svg:path></svg:g>`,
})
export class ProiconsTagRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
