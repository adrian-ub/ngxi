import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCss3ShiledIcon],svg[cib-css3-shiled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l2.181 24.738L16 30l9.819-3.262L28 2zm19.569 5l-.3 2.956l-7.225 3.087h6.969l-.8 9.163L16.076 24l-6.175-1.825l-.4-4.619h3.056l.2 2.394l3.287.831l3.419-.962l.231-3.85l-10.406-.031l-.225-2.894l7.413-3.087H8.795l-.363-2.956z"></svg:path>`,
})
export class CibCss3ShiledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
