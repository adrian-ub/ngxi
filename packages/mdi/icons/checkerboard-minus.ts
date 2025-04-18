import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckerboardMinusIcon],svg[mdi-checkerboard-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17v2h8v-2M8 16h4v-4H8zm4-4h4V8h-4zM2 2v20h11.5c-.5-.6-.9-1.3-1.2-2H8v-4H4v-4h4V8H4V4h4v4h4V4h4v4h4v4.4c.7.3 1.4.7 2 1.2V2z"></svg:path>`,
})
export class MdiCheckerboardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
