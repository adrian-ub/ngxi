import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMenuUnfoldIcon],svg[uiw-menu-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 16.608c.386 0 .699.312.699.696a.7.7 0 0 1-.7.696H.703a.7.7 0 0 1-.7-.696c0-.384.314-.696.7-.696zM15.98 6.492a.7.7 0 0 1 .988.003l2.827 2.827a.7.7 0 0 1 .003.987l-2.812 2.812a.7.7 0 0 1-.987-.003a.7.7 0 0 1-.003-.987l2.32-2.32l-2.332-2.332a.7.7 0 0 1-.003-.987m-1.163 2.639c.387 0 .7.312.7.696a.7.7 0 0 1-.7.696H.7a.7.7 0 0 1-.7-.696c0-.384.313-.696.7-.696zM19.3 2c.387 0 .7.312.7.696a.7.7 0 0 1-.7.696H.703a.7.7 0 0 1-.7-.696c0-.384.314-.696.7-.696z"></svg:path>`,
})
export class UiwMenuUnfoldIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
