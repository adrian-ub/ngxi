import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsBrotliOldIcon],svg[file-icons-brotli-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M374 250.698H95.623V96.433H374zM44.174 469.588h36.015V344.562l-36.015-36.015zM327.306 48.07H44.174V208.9l36.015 37.73V80.999h247.117zM95.623 346.386V512H374V346.386zM28.74 192.732V32.638h262.11V0H0v162.623zm0 100.381L0 264.373v162.802h28.74z"></svg:path>`,
})
export class FileIconsBrotliOldIcon {
  readonly viewBox = input("0 0 374 512")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
