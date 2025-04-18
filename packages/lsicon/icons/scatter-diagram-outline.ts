import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScatterDiagramOutlineIcon],svg[lsicon-scatter-diagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v11.5H14M5 9.75h.005v.005H5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Zm7.25-2.255h.005V7.5H12.5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Zm-1.5 2.26h.005v.005h-.005zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0ZM10.75 5.5h.005v.005h-.005zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0ZM8.48 7.98h.02V8h-.02zm1 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class LsiconScatterDiagramOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
