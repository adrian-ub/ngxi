import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWorkspacesIcon],svg[ix-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 277.333V448H64V277.333zm-42.667 64H192v64h85.333zm-128 0h-42.666v64h42.666zm320-170.666v170.666h-128v-42.666h85.334v-64h-85.334V256h-42.667v-21.333H256V256h-42.667v-85.333zM320 64v85.333h-42.667V128H192v106.666H64V64zm-170.667 64h-42.666v64h42.666z"></svg:path>`,
})
export class IxWorkspacesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
