import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPinInvokeIcon],svg[tabler-pin-invoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 13v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9m4 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M10 11h4v4m-4 0l4-4"></svg:path></svg:g>`,
})
export class TablerPinInvokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
