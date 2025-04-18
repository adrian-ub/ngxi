import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLibraryShelvesIcon],svg[mdi-library-shelves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 9V1.5h-3V9h-3V1.5h-3V9h-3V1.5H4.65V9H3v1.5h18V9zm0 4.5h-3V21h-3v-7.5h-3V21h-3v-7.5H4.65V21H3v1.5h18V21h-1.5z"></svg:path>`,
})
export class MdiLibraryShelvesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
