import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorLineIcon],svg[mdi-vector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v4.59L7.59 15H3v6h6v-4.58L16.42 9H21V3m-4 2h2v2h-2M5 17h2v2H5"></svg:path>`,
})
export class MdiVectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
