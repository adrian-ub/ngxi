import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiLinksysIcon],svg[cbi-linksys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.257 2.412H8.842v14.3h11.769v-2.901h-8.354ZM18.554 2a2.572 2.572 0 1 0 2.572 2.572A2.573 2.573 0 0 0 18.554 2M6.31 2.412H2.874V22h17.737v-2.901H6.31Z"></svg:path>`,
})
export class CbiLinksysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
