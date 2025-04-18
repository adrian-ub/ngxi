import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLockFillIcon],svg[iconamoon-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 7a3 3 0 1 1 6 0v2H9zM7 9V7a5 5 0 0 1 10 0v2h2a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1zm6 6.5a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5h-.01a1.5 1.5 0 0 1-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
