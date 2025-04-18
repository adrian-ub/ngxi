import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBackwardIcon],svg[subway-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m257 271.5l256 128v-256zm-256 0l256 128v-256z"></svg:path>`,
})
export class SubwayBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
