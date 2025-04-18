import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBarchartHorizontalIcon],svg[ix-barchart-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 64H85.333v64H192zM85.333 170.667h341.334v64H85.333zm256 106.666h-256v64h256zM256 384H85.333v64H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxBarchartHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
