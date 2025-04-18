import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBlackWhiteIcon],svg[subway-black-white-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 469.3V42.7c117.8 0 213.3 95.5 213.3 213.3S373.8 469.3 256 469.3"></svg:path>`,
})
export class SubwayBlackWhiteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
