import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMaxIcon],svg[file-icons-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256s256-114.615 256-256S397.385 0 256 0m86.868 156.775l-74.798 52.013l-21.695-31.199l74.798-52.012zM80.82 180.093l74.797-52.012l21.695 31.198l-74.798 52.012zm83.247-.626l74.798-52.012l21.695 31.198l-74.798 52.012zM264.07 449.788l-21.695-31.2l74.798-52.012l21.695 31.2zm28.667-80l-21.695-31.2l74.797-52.012l21.695 31.2zm29-80.334l-21.695-31.2l74.797-52.01l21.695 31.197zm30-80.666l-21.695-31.199l74.797-52.012l21.695 31.198z"></svg:path>`,
})
export class FileIconsMaxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
