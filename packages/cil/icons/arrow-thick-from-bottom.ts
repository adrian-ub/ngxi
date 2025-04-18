import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickFromBottomIcon],svg[cil-arrow-thick-from-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.2 16L56 215.993v38.632h120v144h160v-144h120V216ZM304 222.625v144h-96v-144H94.639L256.174 61.254l161.21 161.371Zm-248 240h400v32H56z"></svg:path>`,
})
export class CilArrowThickFromBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
