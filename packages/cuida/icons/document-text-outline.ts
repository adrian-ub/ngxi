import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaDocumentTextOutlineIcon],svg[cuida-document-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="document-text-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M15.143 22H8.286A4.286 4.286 0 0 1 4 17.714V6.286A4.286 4.286 0 0 1 8.286 2h4.008a3.5 3.5 0 0 1 2.304.866l3.635 3.18a3.5 3.5 0 0 1 1.196 2.635v9.033A4.286 4.286 0 0 1 15.143 22m0-2H8.286A2.286 2.286 0 0 1 6 17.714V6.286A2.286 2.286 0 0 1 8.286 4h4.008a1.5 1.5 0 0 1 .987.371l3.635 3.18a1.5 1.5 0 0 1 .513 1.13v9.033A2.286 2.286 0 0 1 15.143 20"></svg:path><svg:path d="M7 12a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3.125a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m6-13a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h2.5a1 1 0 1 1 0 2H15a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1"></svg:path></svg:g></svg:g>`,
})
export class CuidaDocumentTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
