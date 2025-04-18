import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateRightIcon],svg[mdi-file-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4l4 4v7c0 1.11-.89 2-2 2zm6-8.17L8.17 9H8v3h3zm9-.83h3l-4 4l-4-4h3c0-3.31-2.69-6-6-6l-1 .08V3.06L12 3c4.42 0 8 3.58 8 8"></svg:path>`,
})
export class MdiFileRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
