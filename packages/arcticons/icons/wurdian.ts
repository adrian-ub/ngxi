import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWurdianIcon],svg[arcticons-wurdian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.172 12.387V25.18c0 2.36-1.863 4.347-4.347 4.347c-2.36 0-4.347-1.863-4.347-4.347V12.387h-7.204V25.18c0 2.36-1.863 4.347-4.347 4.347s-4.347-1.863-4.347-4.347V12.387H4.5v13.166c0 5.589 4.844 10.06 10.682 10.06A11.12 11.12 0 0 0 24 31.266c1.987 2.608 5.093 4.347 8.819 4.347c5.961 0 10.681-4.471 10.681-10.06V12.387z"></svg:path>`,
})
export class ArcticonsWurdianIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
