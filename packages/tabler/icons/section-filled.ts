import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSectionFilledIcon],svg[tabler-section-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.01 19a1 1 0 0 1 .117 1.993L20 21a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 0 1 0 2a1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 0 2a1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 .117 1.993L12 21a1 1 0 0 1-.117-1.993zm4 0a1 1 0 0 1 .117 1.993L16 21a1 1 0 0 1-.117-1.993zm4-16a1 1 0 0 1 .117 1.993L20 5a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 1 1 0 2a1 1 0 0 1-.127-1.993zm4 0a1 1 0 1 1 0 2a1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 .117 1.993L12 5a1 1 0 0 1-.117-1.993zM16 3a1 1 0 0 1 1 1a1 1 0 1 1-2 .01c0-.562.448-1.01 1-1.01m3 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></svg:path>`,
})
export class TablerSectionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
