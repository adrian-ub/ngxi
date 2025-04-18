import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileZipBoldIcon],svg[ph-file-zip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 140h-16a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m-48-28v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m-44 56a12 12 0 0 1-12 12H52a12 12 0 0 1-10.42-17.95L63.32 164H52a12 12 0 0 1 0-24h32a12 12 0 0 1 10.42 18l-21.74 38H84a12 12 0 0 1 12 12M216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.48M160 80V57l23 23Z"></svg:path>`,
})
export class PhFileZipBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
