import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTree2SolidIcon],svg[streamline-tree-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.501 5.499A5.499 5.499 0 1 1 8 10.907V13a1 1 0 1 1-2 0v-2.094a5.5 5.5 0 0 1-4.499-5.408Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTree2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
