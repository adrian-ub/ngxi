import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionTrashBinSharpIcon],svg[ion-trash-bin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ionTrashBinSharp0" fill="none" d="M337.46 240L312 214.54l-56 56l-56-56L174.54 240l56 56l-56 56L200 377.46l56-56l56 56L337.46 352l-56-56z"></svg:path></svg:defs><svg:use href="#ionTrashBinSharp0"></svg:use><svg:use href="#ionTrashBinSharp0"></svg:use><svg:path fill="currentColor" d="m64 160l29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160Zm248 217.46l-56-56l-56 56L174.54 352l56-56l-56-56L200 214.54l56 56l56-56L337.46 240l-56 56l56 56Z"></svg:path><svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="12" ry="12"></svg:rect>`,
})
export class IonTrashBinSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
