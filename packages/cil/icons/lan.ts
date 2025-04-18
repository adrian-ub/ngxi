import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLanIcon],svg[cil-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 272v-32H272v-48h56a24.027 24.027 0 0 0 24-24V40a24.027 24.027 0 0 0-24-24H184a24.027 24.027 0 0 0-24 24v128a24.027 24.027 0 0 0 24 24h56v48H16v32h80v48H41.391a24.03 24.03 0 0 0-24 24v128a24.03 24.03 0 0 0 24 24H184a24.027 24.027 0 0 0 24-24V344a24.027 24.027 0 0 0-24-24h-56v-48h256v48h-56a24.027 24.027 0 0 0-24 24v128a24.027 24.027 0 0 0 24 24h144a24.027 24.027 0 0 0 24-24V344a24.027 24.027 0 0 0-24-24h-56v-48ZM192 48h128v112H192Zm-16 416H49.391V352H176Zm288 0H336V352h128Z"></svg:path>`,
})
export class CilLanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
