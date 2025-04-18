import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTronityIcon],svg[cbi-tronity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2Zm11.312 15.578h-.49l.49-.481zm0-.9l-.919.9h-1.051l1.97-1.935zm0-1.451l-2.4 2.354h-.288v-.715l2.687-2.639zm0-1.424l-2.687 2.64v-.961l2.687-2.639zm0-1.381l-2.687 2.639v-1.05l2.687-2.64zm3-3.7h-3v2.232l-2.687 2.64V8.716H7.687v-2.25h8.625z"></svg:path>`,
})
export class CbiTronityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
