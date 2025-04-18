import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPuppetIcon],svg[file-icons-puppet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M334.744 332.82V178.754H213.746l-60.674-61.692V0H0v153.072h120.006l60.674 61.692v82.47l-60.673 61.694H0V512h153.072V394.937l61.092-62.118zM103.237 102.803H51.154V50.268h52.083zm-.433 358.928H51.588v-51.216h51.216z"></svg:path>`,
})
export class FileIconsPuppetIcon {
  readonly viewBox = input("0 0 335 512")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
