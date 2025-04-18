import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoCameraBackSharpIcon],svg[material-symbols-light-video-camera-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.135 15.73h8.692l-2.758-3.653l-2.454 3.077l-1.588-1.885zM3.48 19V5h14v6.27l3.038-3.04v7.54l-3.038-3.04V19z"></svg:path>`,
})
export class MaterialSymbolsLightVideoCameraBackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
