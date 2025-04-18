import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDuplicateFilledIcon],svg[ix-duplicate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128.495 362.667h-64V64H363.16v64h-42.666v-21.333H107.161V320h21.334zm320 85.333V149.333H149.828V448zM384 277.333h-64v-64h-42.667v64h-64V320h64v64H320v-64h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxDuplicateFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
