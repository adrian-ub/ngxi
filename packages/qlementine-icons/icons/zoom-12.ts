import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsZoom12Icon],svg[qlementine-icons-zoom-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.11 9.17a4.5 4.5 0 0 1-2.61.832c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5s4.5 2.01 4.5 4.5c0 .972-.308 1.87-.832 2.61l1.61 1.61a.749.749 0 1 1-1.06 1.06l-1.61-1.61zm.893-3.67c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5S3.573 2 5.503 2s3.5 1.57 3.5 3.5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsZoom12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
