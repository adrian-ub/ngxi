import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVolumeLowIcon],svg[cil-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 168v32a56 56 0 0 1 0 112v32a88 88 0 0 0 0-176m-174.627-48H16v272h129.373l104 104H288V16h-38.627ZM128 360H48V152h80Zm128 97.373l-96-96V150.627l96-96Z"></svg:path>`,
})
export class CilVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
