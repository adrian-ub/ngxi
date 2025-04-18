import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsThorIcon],svg[file-icons-thor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.688 188.671L0 185.711l308.532 96.185l-31.815-71.769l58.451 2.22l-22.937 223.445h168.694l9.618-88.046h-54.751l13.318-130.22h54.751L512 129.48h-54.751l5.179-53.272H347.746l-5.919 55.491H183.491z"></svg:path>`,
})
export class FileIconsThorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
