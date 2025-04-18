import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPhpbbaltIcon],svg[whh-phpbbalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512H256L0 320L512 0l512 320zm0 64l224-160l-96 416l-192 192h-64l64-320H320l64 320h-64L128 832L32 416l224 160z"></svg:path>`,
})
export class WhhPhpbbaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
