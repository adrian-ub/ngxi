import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayLeftUpCornerArrow1Icon],svg[subway-left-up-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.8 128L302.5 23.3L0 0l23.3 302.5L128 197.8L442.2 512l69.8-69.8z"></svg:path>`,
})
export class SubwayLeftUpCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
