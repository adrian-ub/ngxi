import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlash1SolidIcon],svg[streamline-flash-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.272 0a.5.5 0 0 0-.46.305l-2.25 5.31l-.002.005A1 1 0 0 0 2.48 7h2.129l-1.818 6.363a.5.5 0 0 0 .825.5l8.59-8.14l.003-.003A1 1 0 0 0 11.53 4H8.582L10.218.724A.5.5 0 0 0 9.773 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFlash1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
