import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDistributeVerticalIcon],svg[gg-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-opacity=".5" stroke-width="2" d="M9 11h6v2H9z"></svg:path><svg:path fill="currentColor" d="M19 7H5V5h14zm0 12H5v-2h14z"></svg:path></svg:g>`,
})
export class GgDistributeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
