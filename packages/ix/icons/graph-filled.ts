import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixGraphFilledIcon],svg[ix-graph-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M318.846 64H64v234.668h48.624l58.043-174.129l64 192zM64 341.334V448h169.512l-62.845-188.537l-27.291 81.871zM235.821 448H448V341.334h-79.376L320 195.463zM448 298.668V64H321.154l78.222 234.668z" clip-rule="evenodd"></svg:path>`,
})
export class IxGraphFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
