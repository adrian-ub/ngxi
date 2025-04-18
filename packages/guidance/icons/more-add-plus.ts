import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceMoreAddPlusIcon],svg[guidance-more-add-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 9.5v-9h.25l.27.054a10.1 10.1 0 0 0 3.96 0L14.25.5h.25v9h9v.25l-.054.27a10.1 10.1 0 0 0 0 3.96l.054.27v.25h-9v9h-.25l-.27-.054a10.1 10.1 0 0 0-3.96 0l-.27.054H9.5v-9h-9v-.25l.054-.27a10.1 10.1 0 0 0 0-3.96L.5 9.75V9.5z"></svg:path>`,
})
export class GuidanceMoreAddPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
