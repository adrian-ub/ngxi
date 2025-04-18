import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightUnfoldMoreHorizontalIcon],svg[mdi-light-unfold-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.74 8.83l-.7.71L11.5 6L7.96 9.54l-.7-.71l4.24-4.24zm0 7.34l-4.24 4.24l-4.24-4.24l.7-.71L11.5 19l3.54-3.54z"></svg:path>`,
})
export class MdiLightUnfoldMoreHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
