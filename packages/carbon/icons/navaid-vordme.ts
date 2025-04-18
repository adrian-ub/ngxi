import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidVordmeIcon],svg[carbon-navaid-vordme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2Zm-2 6.926L22.964 6H28ZM27.764 16L20.49 26h-8.982L4.236 16L11.51 6h8.982ZM9.036 6L4 12.925V6ZM4 19.075L9.036 26H4ZM22.964 26L28 19.074V26Z"></svg:path>`,
})
export class CarbonNavaidVordmeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
