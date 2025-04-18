import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconContractExclamationOutlineIcon],svg[lsicon-contract-exclamation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 14.5H3.5v-13h9v5M8 3.04V7m.5 7.5h5v-2H12v-1c0-.5 1-3-1-3s-1 2.5-1 3v1H8.5zM8 8.495h.005V8.5H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconContractExclamationOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
