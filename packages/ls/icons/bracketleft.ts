import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBracketleftIcon],svg[ls-bracketleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 0v73H72v809h96v72H0V0z"></svg:path>`,
})
export class LsBracketleftIcon {
  readonly viewBox = input("0 0 168 954")
  readonly width = input("0.18em")
  readonly height = input("1em")
}
