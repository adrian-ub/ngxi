import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCardLayoutIcon],svg[ix-card-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 85.333v149.333h-128V85.333zM128 128H85.334v64H128zm341.334 149.333v149.333h-128V277.333zM426.667 320H384v64h42.667zm42.667-234.667v149.333h-256V85.333zM426.667 128H256v64h170.667zm-128 149.333v149.333h-256V277.333zM256 320H85.334v64H256z"></svg:path>`,
})
export class IxCardLayoutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
