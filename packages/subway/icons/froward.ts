import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFrowardIcon],svg[subway-froward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 382.5l256-128l-256-128zm512-128l-256-128v256z"></svg:path>`,
})
export class SubwayFrowardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
