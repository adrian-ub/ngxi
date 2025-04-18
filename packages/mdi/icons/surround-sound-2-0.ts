import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound20Icon],svg[mdi-surround-sound-2-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h4v2H5c-1.1 0-2 .9-2 2v4h6v-2H5v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm10 10h-2v-2h2zm4-10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiSurroundSound20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
