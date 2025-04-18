import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonUpIcon],svg[gg-pentagon-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 16l5 2V8l-5-2l-5 2v10zm-3-.954l3-1.2l3 1.2V9.354l-3-1.2l-3 1.2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
