import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkPlusIcon],svg[mdi-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zm-6 4v2H9v2h2v2h2v-2h2V9h-2V7z"></svg:path>`,
})
export class MdiBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
