import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilStorageIcon],svg[cil-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 48v416h480V48Zm448 384H48v-96h416Zm0-128H48v-96h416ZM48 176V80h416v96Z"></svg:path><svg:path fill="currentColor" d="M80 112h32v32H80zm0 128h32v32H80zm0 128h32v32H80z"></svg:path>`,
})
export class CilStorageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
