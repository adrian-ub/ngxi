import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftSmallIcon],svg[ix-chevron-left-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M294.187 377.814L172.587 256l121.6-121.813l30.293 30.293L232.747 256l91.733 91.52z"></svg:path>`,
})
export class IxChevronLeftSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
