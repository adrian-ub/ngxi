import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDubleCornerArrow5Icon],svg[subway-duble-corner-arrow-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.5 23.3L314.2 128L256 186.2l69.8 69.8l58.2-58.2l104.7 104.7L512 0zM256 325.8L186.2 256L128 314.2L23.3 209.5L0 512l302.5-23.3L197.8 384z"></svg:path>`,
})
export class SubwayDubleCornerArrow5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
