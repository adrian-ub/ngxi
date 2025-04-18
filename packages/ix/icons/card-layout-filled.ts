import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCardLayoutFilledIcon],svg[ix-card-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 85.333v149.333h-128V85.333zm298.667 192v149.333h-128V277.333zm0-192v149.333h-256V85.333zm-170.667 192v149.333h-256V277.333z"></svg:path>`,
})
export class IxCardLayoutFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
