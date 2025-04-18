import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionCollectionIcon],svg[carbon-partition-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12c-1.858 0-3.41 1.28-3.858 3h-2.728c-.534 0-1.036.208-1.414.586L12.586 21H2v2h10.586c.534 0 1.036-.208 1.414-.586L19.414 17h2.728c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m-9.828-3.414L12.586 11H2V9h10.586c.534 0 1.036.208 1.414.586l3.586 3.586z"></svg:path>`,
})
export class CarbonPartitionCollectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
