import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarCrescentIcon],svg[mdi-star-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 2H12A10 10 0 0 0 2 12a10 10 0 0 0 10 10c3 0 4.7-1 6.5-2.5C13 21 8 17 8 12s5-9 10.5-7.5A8.56 8.56 0 0 0 12.3 2m4.5 4.2l-1.5 3.5l-3.7.3l2.9 2.5l-.9 3.5l3.2-2l3.2 2l-1-3.5l3-2.5l-3.7-.3z"></svg:path>`,
})
export class MdiStarCrescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
