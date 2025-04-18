import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInstanceVirtualIcon],svg[carbon-instance-virtual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2 6h4v2H2zm6 0h4v2H8zm6 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm2 22H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 20v6h24v-6zm-2-8h28v2H2z"></svg:path>`,
})
export class CarbonInstanceVirtualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
