import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceOutlineIcon],svg[mdi-wall-sconce-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.7 6l2.22 5h-5.84l2.22-5zM15 4h-4l-4 9h12zM4 14v8h2v-3h8v-5h-2v3H6v-3z"></svg:path>`,
})
export class MdiWallSconceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
