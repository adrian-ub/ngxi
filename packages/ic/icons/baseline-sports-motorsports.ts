import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSportsMotorsportsIcon],svg[ic-baseline-sports-motorsports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.39c0-.65-.39-1.23-.98-1.48L5.44 7.55c-1.48 1.68-2.32 3.7-2.8 5.45h7.75c.89 0 1.61-.72 1.61-1.61"></svg:path><svg:path fill="currentColor" d="M21.96 11.22c-.41-4.41-4.56-7.49-8.98-7.2c-2.51.16-4.44.94-5.93 2.04l4.74 2.01c1.33.57 2.2 1.87 2.2 3.32c0 1.99-1.62 3.61-3.61 3.61H2.21C2 16.31 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78"></svg:path>`,
})
export class IcBaselineSportsMotorsportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
