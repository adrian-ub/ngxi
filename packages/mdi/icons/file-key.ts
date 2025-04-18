import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileKeyIcon],svg[mdi-file-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m9-8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8m4 13h-5.2c-.6-1.6-2.3-2.4-3.8-1.8c-1.6.6-2.4 2.3-1.8 3.8s2.3 2.4 3.8 1.8c.9-.3 1.5-1 1.8-1.8H14v2h2v-2h2m.5-8L13 3.5V9z"></svg:path>`,
})
export class MdiFileKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
