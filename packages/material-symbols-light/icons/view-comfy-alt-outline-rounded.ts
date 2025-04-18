import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyAltOutlineRoundedIcon],svg[material-symbols-light-view-comfy-alt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.962 10H4.038q-.441 0-.74-.299T3 8.961V4.04q0-.441.299-.74t.74-.3h4.923q.44 0 .739.299t.299.74v4.923q0 .44-.299.739t-.74.299M4 9h5V4H4zm4.962 12H4.039q-.441 0-.74-.299T3 19.961V15.04q0-.441.299-.74t.74-.299h4.923q.44 0 .739.299t.299.74v4.922q0 .441-.299.74t-.74.299M4 20h5v-5H4zm15.962-10h-4.924q-.44 0-.739-.299T14 8.961V4.04q0-.441.299-.74t.74-.299h4.922q.441 0 .74.299t.299.74v4.923q0 .44-.299.739t-.74.299M15 9h5V4h-5zm4.962 12h-4.924q-.44 0-.739-.299t-.299-.74V15.04q0-.441.299-.74t.74-.299h4.922q.441 0 .74.299t.299.74v4.922q0 .441-.299.74t-.74.299M15 20h5v-5h-5zm0-5"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyAltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
