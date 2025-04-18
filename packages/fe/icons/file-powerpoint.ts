import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFilePowerpointIcon],svg[fe-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m9.172 2H6v16h12V6.828h-2.828zM10 16v2H8v-8h5a3 3 0 0 1 0 6zm0-4v2h3a1 1 0 0 0 0-2z"></svg:path>`,
})
export class FeFilePowerpointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
