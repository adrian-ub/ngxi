import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAtomIcon],svg[mynaui-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.407 8.593c4.6 4.6 6.802 9.853 4.92 11.735c-1.88 1.881-7.135-.322-11.734-4.921S1.791 5.554 3.673 3.672c1.88-1.881 7.134.322 11.734 4.921"></svg:path><svg:path d="M8.594 8.593c-4.6 4.6-6.803 9.853-4.921 11.735s7.135-.322 11.734-4.921s6.803-9.853 4.921-11.735s-7.135.322-11.734 4.921M11.75 12h.5"></svg:path></svg:g>`,
})
export class MynauiAtomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
