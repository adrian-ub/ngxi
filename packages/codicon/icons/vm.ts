import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconVmIcon],svg[codicon-vm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 2h-13l-.5.5v10l.5.5H7v1H4v1h8v-1H9v-1h5.5l.5-.5v-10zM14 12H2V3h12z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconVmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
