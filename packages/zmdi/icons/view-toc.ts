import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewTocIcon],svg[zmdi-view-toc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V85h299v43zm0 85v-42h299v42zm0 86v-43h299v43zm341 0v-43h43v43zm0-214h43v43h-43zm0 128v-42h43v42z"></svg:path>`,
})
export class ZmdiViewTocIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
