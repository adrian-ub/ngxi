import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateRightOutlineIcon],svg[mdi-file-rotate-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h3l-4 4l-4-4h3c0-3.31-2.69-6-6-6l-1 .08V3.06L12 3c4.42 0 8 3.58 8 8M9 7H5c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h6c1.11 0 2-.89 2-2v-7zm2 11H5V9h3v3h3z"></svg:path>`,
})
export class MdiFileRotateRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
