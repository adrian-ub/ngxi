import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftBarSmallIcon],svg[ix-chevron-left-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 384H192V128h-42.667zm44.586-127.999l121.6 121.813l30.294-30.293l-91.734-91.52l91.734-91.52l-30.294-30.293z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronLeftBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
