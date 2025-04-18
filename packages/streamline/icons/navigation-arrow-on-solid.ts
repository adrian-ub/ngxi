import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNavigationArrowOnSolidIcon],svg[streamline-navigation-arrow-on-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.96.695a.5.5 0 0 0-.655-.655l-13 5.5a.5.5 0 0 0-.029.907l4.851 2.426l2.426 4.85a.5.5 0 0 0 .907-.028z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNavigationArrowOnSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
