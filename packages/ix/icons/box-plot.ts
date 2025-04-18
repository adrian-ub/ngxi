import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBoxPlotIcon],svg[ix-box-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.33h42.666v42.667h-64v213.334h64v42.666h-42.666v42.667h128v-42.667H384v-42.666h64V127.997h-64V85.331h42.667V42.664h-128zm106.666 85.334H320v128h85.333zm-234.666 21.333h42.666v-42.666h-128v42.666H128v42.667H64v149.333h64v42.667H85.333v42.667h128v-42.667h-42.666v-42.667h64V234.664h-64zm-64 149.334v-64H192v64z" clip-rule="evenodd"></svg:path>`,
})
export class IxBoxPlotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
