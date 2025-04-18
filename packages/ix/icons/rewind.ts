import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRewindIcon],svg[ix-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 256V128L42.667 256L256 384zm0 0l213.333-128v256zm-42.667 52.672L125.568 256l87.765-52.651zm213.334 0L338.901 256l87.766-52.651z" clip-rule="evenodd"></svg:path>`,
})
export class IxRewindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
