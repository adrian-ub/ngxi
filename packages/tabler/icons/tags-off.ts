import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTagsOffIcon],svg[tabler-tags-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.296 12.296l-5.71-5.71M6 6H5a2 2 0 0 0-2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278-3.278M18 19l.496-.496m1.888-2.137a4.82 4.82 0 0 0-.792-5.775L15 6m-8 4h-.01M3 3l18 18"></svg:path>`,
})
export class TablerTagsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
