import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFaviconFilledIcon],svg[tabler-favicon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m5 0a3 3 0 0 0 0 6a1 1 0 0 0 .117-1.993L11 13a1 1 0 0 1-.117-1.993L11 11a1 1 0 0 0 0-2m5 0a3 3 0 0 0-2.995 2.824L13 12a3 3 0 1 0 3-3"></svg:path><svg:path d="M16 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class TablerFaviconFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
