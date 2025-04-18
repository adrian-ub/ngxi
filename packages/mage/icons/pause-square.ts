import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePauseSquareIcon],svg[mage-pause-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.074 7.723H8.223a.5.5 0 0 0-.5.5v7.554a.5.5 0 0 0 .5.5h1.851a.5.5 0 0 0 .5-.5V8.223a.5.5 0 0 0-.5-.5m5.703 0h-1.851a.5.5 0 0 0-.5.5v7.554a.5.5 0 0 0 .5.5h1.851a.5.5 0 0 0 .5-.5V8.223a.5.5 0 0 0-.5-.5"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MagePauseSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
