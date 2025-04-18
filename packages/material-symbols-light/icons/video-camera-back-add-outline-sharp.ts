import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoCameraBackAddOutlineSharpIcon],svg[material-symbols-light-video-camera-back-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.48 19v-6.615h1V18h12V6h-5.614V5h6.615v6.27l3.038-3.04v7.54l-3.038-3.04V19zm2.655-3.27h8.692l-2.74-3.653l-2.53 3.192l-1.605-1.925zM5.48 10V8h-2V7h2V5h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightVideoCameraBackAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
