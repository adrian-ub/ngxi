import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZipDiskIcon],svg[mdi-zip-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3L3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5l-4-2v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3zm1 7h8a1 1 0 0 1 1 1v8H7v-8a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiZipDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
