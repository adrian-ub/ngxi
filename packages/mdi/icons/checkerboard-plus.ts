import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckerboardPlusIcon],svg[mdi-checkerboard-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h3v2h-3v3h-2v-3h-3v-2h3v-3h2zM8 16h4v-4H8zm4-4h4V8h-4zM2 2v20h11.54c-.54-.58-.91-1.26-1.18-2H8v-4H4v-4h4V8H4V4h4v4h4V4h4v4h4v4.36c.74.27 1.42.64 2 1.18V2z"></svg:path>`,
})
export class MdiCheckerboardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
