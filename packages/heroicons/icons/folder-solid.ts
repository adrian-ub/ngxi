import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsFolderSolidIcon],svg[heroicons-folder-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3zm-18-10.854V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.48 4.48 0 0 0 19.5 9h-15a4.48 4.48 0 0 0-3 1.146"></svg:path>`,
})
export class HeroiconsFolderSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
