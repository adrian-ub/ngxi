import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNucleusIcon],svg[whh-nucleus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 320L736 0l160 128l-288 224zM128 128L288 0l192 320l-64 32zm288 352L64 709L0 512l384-96zm160 32l64 512H384l64-512zm64-96l384 96l-64 197l-352-229z"></svg:path>`,
})
export class WhhNucleusIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
