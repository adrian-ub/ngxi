import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPolaroidIcon],svg[tabler-polaroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 10h16"></svg:path><svg:path d="m4 12l3-3c.928-.893 2.072-.893 3 0l4 4"></svg:path><svg:path d="m13 12l2-2c.928-.893 2.072-.893 3 0l2 2m-6-5h.01"></svg:path></svg:g>`,
})
export class TablerPolaroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
