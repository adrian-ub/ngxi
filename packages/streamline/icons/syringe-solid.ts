import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSyringeSolidIcon],svg[streamline-syringe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.47.393a1 1 0 0 1 1.414 0l2.723 2.723a1 1 0 1 1-1.414 1.414l-.655-.654l-1.309 1.309l2.47 2.47a1 1 0 0 1-1.414 1.414l-1.001-1.001l-3.372 3.439l-.003.003a2.315 2.315 0 0 1-3.135.13l-1.967 1.967a1 1 0 1 1-1.414-1.414l1.967-1.967a2.316 2.316 0 0 1 .13-3.135l.003-.003l3.44-3.372l-1.002-1A1 1 0 0 1 6.346 1.3l2.47 2.47l1.308-1.31l-.654-.654a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSyringeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
