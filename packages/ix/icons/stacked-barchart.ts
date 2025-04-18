import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStackedBarchartIcon],svg[ix-stacked-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 128.001h64v64h-64zm-42.667 64H64v85.334h64zm0 106.667H64v128h64zm106.667-85.333h-64v213.333h64zm42.666 21.333h64v64h-64zm64 85.333h-64v106.667h64zM384 149.335h64v64h-64zm64 85.333h-64v192h64zm-277.333-160h64v32h-64zM128 149.335H64v21.333h64zm149.333 21.333h64v42.667h-64zm106.667-64h64v21.333h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxStackedBarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
