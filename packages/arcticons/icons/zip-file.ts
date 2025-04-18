import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZipFileIcon],svg[arcticons-zip-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.315 4.5h3.657v2.822h-3.657zm-3.657 2.822h3.657v2.822h-3.657zm3.657 2.821h3.657v2.822h-3.657zm-3.657 2.822h3.657v2.822h-3.657zm3.657 2.821h3.657v2.822h-3.657zm-3.657 2.822h3.657v2.822h-3.657zm3.657 2.821h3.657v2.822h-3.657zm-3.657 2.822h3.657v2.822h-3.657zm3.657 2.821h3.657v2.822h-3.657z"></svg:path>`,
})
export class ArcticonsZipFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
