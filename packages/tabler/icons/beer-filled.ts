import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBeerFilledIcon],svg[tabler-beer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a2 2 0 0 1 1.995 1.85L19 4v4c0 1.335-.229 2.386-.774 3.692l-.157.363l-.31.701a8.9 8.9 0 0 0-.751 3.242l-.008.377V20a2 2 0 0 1-1.85 1.995L15 22H9a2 2 0 0 1-1.995-1.85L7 20v-3.625c0-1.132-.21-2.25-.617-3.28l-.142-.34l-.31-.699c-.604-1.358-.883-2.41-.925-3.698L5 8V4a2 2 0 0 1 1.85-1.995L7 2zm0 2H7v3h10z"></svg:path>`,
})
export class TablerBeerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
