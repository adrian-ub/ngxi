import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMusic1FillIcon],svg[iconamoon-music-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.972 2A.996.996 0 0 0 11 3v11.535A4 4 0 1 0 13 18V8.18l4.836.806A1 1 0 0 0 19 8V4a1 1 0 0 0-.836-.986l-5.981-.997A1 1 0 0 0 11.972 2" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonMusic1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
