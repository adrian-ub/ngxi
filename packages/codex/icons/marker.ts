import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexMarkerIcon],svg[codex-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m11.354 9.318l1.414-1.414a2 2 0 1 1 2.828 2.828l-1.414 1.414m-2.828-2.828l-3.387 3.386a4 4 0 0 0-1.094 2.044l-.175.877a1 1 0 0 0 1.177 1.177l.877-.175a4 4 0 0 0 2.044-1.094l3.386-3.387m-2.828-2.828l2.828 2.828"></svg:path><svg:path stroke-linecap="round" d="M15 17h4"></svg:path></svg:g>`,
})
export class CodexMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
