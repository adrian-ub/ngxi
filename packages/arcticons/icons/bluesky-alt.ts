import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlueskyAltIcon],svg[arcticons-bluesky-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.395 28.624a8.482 8.482 0 0 0-8.135-10.915c-.507 0-1.001.052-1.484.138a5.91 5.91 0 0 0-5.747-4.536c-1.983 0-3.724.986-4.795 2.484c-.212-.012-.421-.032-.636-.032c-4.703 0-8.707 2.952-10.288 7.1a5.913 5.913 0 0 0 .105 11.826h29.96a3.125 3.125 0 0 0 3.125-3.125a3.115 3.115 0 0 0-2.106-2.94Z"></svg:path>`,
})
export class ArcticonsBlueskyAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
