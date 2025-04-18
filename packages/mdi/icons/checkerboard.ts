import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckerboardIcon],svg[mdi-checkerboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2zm18 10h-4v4h4v4h-4v-4h-4v4H8v-4H4v-4h4V8H4V4h4v4h4V4h4v4h4zm-4-4v4h-4V8zm-4 4v4H8v-4z"></svg:path>`,
})
export class MdiCheckerboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
