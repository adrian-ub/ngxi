import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFolderSearchOneIcon],svg[icon-park-solid-folder-search-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15"></svg:path><svg:circle cx="32" cy="32" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m37 36l5 4"></svg:path></svg:g>`,
})
export class IconParkSolidFolderSearchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
