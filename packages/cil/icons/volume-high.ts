import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVolumeHighIcon],svg[cil-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.373 120H16v272h129.373l104 104H288V16h-38.627ZM128 360H48V152h80Zm128 97.373l-96-96V150.627l96-96ZM408 256a88.1 88.1 0 0 0-88-88v32a56 56 0 0 1 0 112v32a88.1 88.1 0 0 0 88-88"></svg:path><svg:path fill="currentColor" d="M320 57.445v32.277C401.307 101.4 464 171.512 464 256s-62.693 154.6-144 166.278v32.277C419.005 442.66 496 358.158 496 256S419.005 69.34 320 57.445"></svg:path>`,
})
export class CilVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
