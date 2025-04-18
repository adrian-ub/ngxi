import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCercle1Icon],svg[subway-cercle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 426.7c-94.3 0-170.7-76.4-170.7-170.7S161.7 85.3 256 85.3S426.7 161.7 426.7 256S350.3 426.7 256 426.7m0-256c-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3s85.3-38.2 85.3-85.3s-38.2-85.3-85.3-85.3"></svg:path>`,
})
export class SubwayCercle1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
