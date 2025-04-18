import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateLeftOutlineIcon],svg[mdi-file-rotate-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11c0-4.42 3.58-8 8-8l1 .06v2.02L12 5c-3.31 0-6 2.69-6 6h3l-4 4l-4-4zm13-4h-4c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h6c1.11 0 2-.89 2-2v-7zm2 11h-6V9h3v3h3z"></svg:path>`,
})
export class MdiFileRotateLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
