import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTreeIcon],svg[ix-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64h128v64h-128zM192 170.667h128v64H192zm0 106.666h128v64H192zM298.666 384h128v64h-128zM160 149.333v32h10.666v32H128v-64zm106.666 213.334v32h10.667v32h-42.667v-64zM160 234.667V288h10.666v32H128v-85.333z"></svg:path>`,
})
export class IxTreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
