import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBackCamera1SolidIcon],svg[streamline-back-camera-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.684.432C2.954.147 3.326 0 3.731 0h6.538c.406 0 .778.147 1.047.432c.267.283.395.663.395 1.068v11c0 .405-.128.785-.395 1.068a1.4 1.4 0 0 1-1.047.432H3.731c-.405 0-.778-.146-1.047-.432c-.267-.283-.395-.663-.395-1.068v-11c0-.405.128-.785.395-1.068M7 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBackCamera1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
