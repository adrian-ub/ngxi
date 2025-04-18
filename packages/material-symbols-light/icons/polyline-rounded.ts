import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPolylineRoundedIcon],svg[material-symbols-light-polyline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 20.462v-1.27L8.116 15.5H4.539q-.441 0-.74-.299t-.299-.74V11.54q0-.441.299-.74t.74-.299H7.53l2.97-3.409V3.54q0-.441.299-.74t.74-.299h2.923q.44 0 .739.299t.299.74v2.923q0 .44-.299.739t-.74.299H11.47L8.5 10.908v3.65l7.029 3.511v-.692q.046-.383.328-.63q.281-.247.681-.247h2.923q.441 0 .74.299t.299.74v2.922q0 .441-.299.74t-.74.299H16.54q-.441 0-.74-.299t-.299-.74"></svg:path>`,
})
export class MaterialSymbolsLightPolylineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
