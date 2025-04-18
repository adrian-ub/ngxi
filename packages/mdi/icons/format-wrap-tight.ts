import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatWrapTightIcon],svg[mdi-format-wrap-tight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l5 10H7zM3 3h18v2H3zm0 4h6v2H3zm18 0v2h-6V7zM3 11h4v2H3zm18 0v2h-4v-2zM3 15h3v2H3zm18 0v2h-3v-2zM3 19h18v2H3z"></svg:path>`,
})
export class MdiFormatWrapTightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
