import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDefinitionSearchBookIcon],svg[streamline-definition-search-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m3.5 1l-1.73-1.73M7 2A1.5 1.5 0 0 0 5.5.5h-5v10h5M7 2v4.5M7 2A1.5 1.5 0 0 1 8.5.5h5v7"></svg:path>`,
})
export class StreamlineDefinitionSearchBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
