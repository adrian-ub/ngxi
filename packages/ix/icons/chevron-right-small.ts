import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightSmallIcon],svg[ix-chevron-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M217.813 377.814L187.52 347.52L279.253 256l-91.733-91.52l30.293-30.293L339.413 256z"></svg:path>`,
})
export class IxChevronRightSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
