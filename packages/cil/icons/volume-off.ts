import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVolumeOffIcon],svg[cil-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m490.51 187.313l-22.628-22.626l-64.284 64.284l-64.285-64.284l-22.627 22.626l64.285 64.285l-64.285 64.285l22.627 22.627l64.285-64.284l64.284 64.284l22.628-22.627l-64.285-64.285zM145.373 120H16v272h129.373l104 104H288V16h-38.627ZM128 360H48V152h80Zm128 97.373l-96-96V150.627l96-96Z"></svg:path>`,
})
export class CilVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
