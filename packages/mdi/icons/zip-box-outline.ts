import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZipBoxOutlineIcon],svg[mdi-zip-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17v-2h2v2zm2-4v-2h-2v2zm0-4V7h-2v2zm-4 2h2V9h-2zm0 4h2v-2h-2zM21 5v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-2 0h-7v2h-2V5H5v14h14z"></svg:path>`,
})
export class MdiZipBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
