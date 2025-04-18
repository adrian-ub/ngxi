import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmMatch360Icon],svg[carbon-ibm-match-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 25a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2m11 0a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2m11 0a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2m1-2h-2V11a2.006 2.006 0 0 0-2-2h-2V7h2a4.01 4.01 0 0 1 4 4zM15 12h2v11h-2zM6 23H4V11a4.01 4.01 0 0 1 4-4h2v2H8a2.006 2.006 0 0 0-2 2zM16 2l-1.3 2.634l-2.906.42l2.103 2.052L13.4 10L16 8.634L18.6 10l-.497-2.894l2.103-2.049l-2.906-.423z"></svg:path>`,
})
export class CarbonIbmMatch360Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
