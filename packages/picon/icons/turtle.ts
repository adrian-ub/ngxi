import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTurtleIcon],svg[picon-turtle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6Q1 8 0 6c0-5 5-5 5 0Q4 8 3 6m3-3h1V2H6M5 5c-2-8 7-2 1-1"></svg:path>`,
})
export class PiconTurtleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
