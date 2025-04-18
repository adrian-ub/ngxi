import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentInfoIcon],svg[ix-document-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 362.667v-128h42.666v128zM256 213.333c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667H85.333v426.666h341.334V161.83zm-17.69 42.666L384 179.52v247.147H128V85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentInfoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
