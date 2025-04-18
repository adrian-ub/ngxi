import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber4Icon],svg[ri-number-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1.5V16h3v2h-3v4h-2v-4H4v-1.102L14 1.5zM14 16V5.171L6.968 16z"></svg:path>`,
})
export class RiNumber4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
