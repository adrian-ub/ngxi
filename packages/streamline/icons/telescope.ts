import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTelescopeIcon],svg[streamline-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.34 4.814L.72 6.134m.88 2.412l3.619-1.319M4.12 4.211l1.318 3.62L13.5 5.575L11.741.75zm1.377 9.039l2.5-6.135l2.5 6.135M.5 5.53l1.319 3.62"></svg:path>`,
})
export class StreamlineTelescopeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
