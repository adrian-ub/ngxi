import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFoldersIcon],svg[charm-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.75 2.25v8h9.5v-6.5h-5l-1.5-1.5z"></svg:path><svg:path d="M4.75 5.25h-3v8h9.5v-3"></svg:path></svg:g>`,
})
export class CharmFoldersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
