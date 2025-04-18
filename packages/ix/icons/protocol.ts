import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProtocolIcon],svg[ix-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 42.667v426.667H85.333V42.667zM384 85.334H128v341.333h256zM341.333 320v42.667H170.666V320zm0-85.333v42.667H170.666v-42.667zm0-85.333V192H170.666v-42.666z"></svg:path>`,
})
export class IxProtocolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
