import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickToTopIcon],svg[cil-arrow-thick-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 297.365V336h120v160h160V336h120v-38.626l-199.8-200ZM304 304v160h-96V304H94.639l161.535-161.37L417.384 304ZM56 16.002h400v32H56z"></svg:path>`,
})
export class CilArrowThickToTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
