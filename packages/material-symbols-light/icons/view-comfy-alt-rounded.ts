import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyAltRoundedIcon],svg[material-symbols-light-view-comfy-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.962 10H4.038q-.441 0-.74-.299T3 8.961V4.04q0-.441.299-.74t.74-.3h4.923q.44 0 .739.299t.299.74v4.923q0 .44-.299.739t-.74.299m0 11H4.04q-.441 0-.74-.299t-.3-.74V15.04q0-.441.299-.74t.74-.299h4.923q.44 0 .739.299t.299.74v4.922q0 .441-.299.74t-.74.299m11-11H15.04q-.441 0-.74-.299t-.3-.741V4.04q0-.441.299-.74t.74-.299h4.922q.441 0 .74.299t.299.74v4.923q0 .44-.299.739t-.74.299m0 11H15.04q-.441 0-.74-.299t-.299-.74V15.04q0-.441.299-.74t.74-.299h4.922q.441 0 .74.299t.299.74v4.922q0 .441-.299.74t-.74.299"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
