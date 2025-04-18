import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewCozyRoundedIcon],svg[material-symbols-light-view-cozy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.462 10.5H5.038q-.44 0-.739-.299Q4 9.9 4 9.46V5.039q0-.44.299-.739q.3-.299.74-.299h4.423q.44 0 .739.299q.299.3.299.74v4.423q0 .44-.299.739q-.3.299-.74.299Zm0 9.5H5.038q-.44 0-.739-.299q-.299-.3-.299-.74v-4.423q0-.44.299-.739q.3-.299.74-.299h4.423q.44 0 .739.299q.299.3.299.74v4.423q0 .44-.299.739q-.3.299-.74.299Zm9.5-9.5h-4.424q-.44 0-.739-.299q-.299-.3-.299-.74V5.039q0-.44.299-.739q.3-.299.74-.299h4.423q.44 0 .739.299q.299.3.299.74v4.423q0 .44-.299.739q-.3.299-.74.299Zm0 9.5h-4.424q-.44 0-.739-.299q-.299-.3-.299-.74v-4.423q0-.44.299-.739q.3-.299.74-.299h4.423q.44 0 .739.299q.299.3.299.74v4.423q0 .44-.299.739q-.3.299-.74.299Z"></svg:path>`,
})
export class MaterialSymbolsLightViewCozyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
