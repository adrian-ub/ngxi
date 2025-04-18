import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOff16FilledIcon],svg[fluent-star-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.358 13.065l1.788 1.789a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l3.482 3.482l-2.356.342a.9.9 0 0 0-.5 1.535l2.462 2.4L3.653 13a.9.9 0 0 0 1.306.948L8 12.35l3.042 1.6a.9.9 0 0 0 1.315-.884m-.59-3.453l.007.042L6.212 4.09l.982-1.99a.9.9 0 0 1 1.614 0l1.521 3.083l3.401.494a.9.9 0 0 1 .5 1.535z"></svg:path>`,
})
export class FluentStarOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
