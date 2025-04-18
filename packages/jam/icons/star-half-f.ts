import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStarHalfFIcon],svg[jam-star-half-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.989 0L10 .024V15.76l-.011-.006L3.815 19l1.179-6.874L0 7.257l6.902-1.003z"></svg:path>`,
})
export class JamStarHalfFIcon {
  readonly viewBox = input("0 0 10 19")
  readonly width = input("0.53em")
  readonly height = input("1em")
}
