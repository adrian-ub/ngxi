import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilPlusIcon],svg[cil-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 240H272V72h-32v168H72v32h168v168h32V272h168z"></svg:path>`,
})
export class CilPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
