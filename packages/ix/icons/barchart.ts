import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBarchartIcon],svg[ix-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v298.667H64zm106.667 149.333h64v149.334h-64zM448 170.667h-64v192h64zm-170.667-64h64v256h-64zM448 405.333H64V448h384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
