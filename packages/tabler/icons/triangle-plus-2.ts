import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrianglePlus2Icon],svg[tabler-triangle-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.69 12.027L13.636 3.59a1.914 1.914 0 0 0-3.274 0L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871H12M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerTrianglePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
