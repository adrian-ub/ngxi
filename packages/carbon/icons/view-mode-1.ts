import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonViewMode1Icon],svg[carbon-view-mode-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v2H4zm0-7h24v2H4zM26 6v6H6V6zm0-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonViewMode1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
