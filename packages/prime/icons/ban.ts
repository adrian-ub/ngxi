import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBanIcon],svg[prime-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 9 9a9 9 0 0 0-9-9m-7.5 9a7.44 7.44 0 0 1 1.7-4.74L16.74 17.8A7.49 7.49 0 0 1 4.5 12m13.3 4.74L7.26 6.2A7.49 7.49 0 0 1 17.8 16.74"></svg:path>`,
})
export class PrimeBanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
