import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditDocumentFilledIcon],svg[ix-edit-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m396.445 42.667l72.889 72.889l-45.944 45.943l-72.889-72.89zm-66.057 66.056l72.889 72.889L264.889 320H192v-72.889zM277.333 64h67.608L170.667 238.275v103.058h103.059L384 231.059V448H85.334V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
