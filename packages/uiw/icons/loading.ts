import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwLoadingIcon],svg[uiw-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-6.259-3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m11.578.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M18.5 9.319a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m15.286-.793a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6m7.5 3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path>`,
})
export class UiwLoadingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
