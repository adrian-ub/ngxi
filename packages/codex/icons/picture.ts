import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexPictureIcon],svg[codex-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5.14 15.32l3.55-3.754A1.75 1.75 0 0 1 9.969 11c.479 0 .938.204 1.277.566L15.387 16m-1.806-1.934l1.432-1.533a1.75 1.75 0 0 1 1.277-.566c.48 0 .939.204 1.277.566l1.274 1.43m-5.063-4.63h.009"></svg:path></svg:g>`,
})
export class CodexPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
