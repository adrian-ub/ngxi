import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAB2Icon],svg[tabler-a-b-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h3c.81 0 1.48-.67 1.48-1.48l.02-.02c0-.82-.69-1.5-1.5-1.5h-3zm0-6h2.5c.84-.01 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H16zM4 9V5c0-1.036.895-2 2-2s2 .964 2 2v4m-5.01 2.98a9 9 0 0 0 9 9m9-9a9 9 0 0 0-9-9M8 7H4"></svg:path>`,
})
export class TablerAB2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
