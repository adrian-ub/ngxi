import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionSameIcon],svg[carbon-partition-same-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18c-1.858 0-3.41 1.28-3.858 3H2v2h20.142c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m0-18c-1.858 0-3.41 1.28-3.858 3H2v2h20.142c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2"></svg:path>`,
})
export class CarbonPartitionSameIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
