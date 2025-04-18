import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCopyIcon],svg[cil-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 432h-32v32H112V136h32v-32H80v392h328z"></svg:path><svg:path fill="currentColor" d="M176 16v384h320V153.373L358.627 16Zm288 352H208V48h104v152h152Zm0-200H344V48h1.372L464 166.627Z"></svg:path>`,
})
export class CilCopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
