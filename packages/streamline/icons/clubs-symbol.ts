import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineClubsSymbolIcon],svg[streamline-clubs-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a2.786 2.786 0 0 0-2.786 2.786c0 .696.256 1.523.678 2.22c-.538-.231-1.106-.363-1.606-.363a2.786 2.786 0 0 0 0 5.571c.73 0 1.604-.28 2.321-.74L4.892 13.5h4.216l-.715-3.527c.717.46 1.59.741 2.321.741a2.786 2.786 0 0 0 0-5.571c-.5 0-1.068.132-1.606.363c.422-.697.678-1.524.678-2.22A2.786 2.786 0 0 0 7 .5"></svg:path>`,
})
export class StreamlineClubsSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
