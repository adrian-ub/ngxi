import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCopyOutlineIcon],svg[cuida-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="copy-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M2 11.667a3.4 3.4 0 0 1 3.4-3.4h2.205v2H5.4a1.4 1.4 0 0 0-1.4 1.4v7.2a1.4 1.4 0 0 0 1.4 1.4h7.2a1.4 1.4 0 0 0 1.4-1.4v-1.8h2v1.8a3.4 3.4 0 0 1-3.4 3.4H5.4a3.4 3.4 0 0 1-3.4-3.4z"></svg:path><svg:path d="M10 3h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></svg:path></svg:g></svg:g>`,
})
export class CuidaCopyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
