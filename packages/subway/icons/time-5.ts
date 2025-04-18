import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayTime5Icon],svg[subway-time-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 469.3c-117.8 0-213.3-95.5-213.3-213.3S138.2 42.7 256 42.7S469.3 138.2 469.3 256S373.8 469.3 256 469.3m-21.3-256L181.3 160l-32 32l128 128V85.3h-42.7v128z"></svg:path>`,
})
export class SubwayTime5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
