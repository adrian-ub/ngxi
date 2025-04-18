import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMlinkIcon],svg[arcticons-mlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.492 17.646h15.016M24 34.48V17.646M40.513 35.49l-14.82 8.556a3.39 3.39 0 0 1-3.387 0L7.486 35.49a3.39 3.39 0 0 1-1.693-2.934V15.444c0-1.21.646-2.329 1.694-2.934l14.82-8.556a3.39 3.39 0 0 1 3.387 0l14.82 8.556a3.39 3.39 0 0 1 1.693 2.934v17.112c0 1.21-.646 2.329-1.694 2.934"></svg:path>`,
})
export class ArcticonsMlinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
