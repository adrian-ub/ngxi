import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilClipboardIcon],svg[cil-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 56h-56v32h48v376H88V88h48V56H80a24.03 24.03 0 0 0-24 24v392a24.03 24.03 0 0 0 24 24h352a24.03 24.03 0 0 0 24-24V80a24.03 24.03 0 0 0-24-24"></svg:path><svg:path fill="currentColor" d="M192 140h128a24.03 24.03 0 0 0 24-24V16H168v100a24.03 24.03 0 0 0 24 24m8-92h112v60H200Z"></svg:path>`,
})
export class CilClipboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
