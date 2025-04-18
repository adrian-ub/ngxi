import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiffIcon],svg[codicon-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2 3.5l.5-.5h5l.5.5v9l-.5.5h-5l-.5-.5zM3 12h4V6H3zm0-7h4V4H3zm6.5-2h5l.5.5v9l-.5.5h-5l-.5-.5v-9zm.5 9h4v-2h-4zm0-4h4V4h-4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDiffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
