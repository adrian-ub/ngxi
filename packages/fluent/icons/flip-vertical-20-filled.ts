import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical20FilledIcon],svg[fluent-flip-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.66 2.122a.75.75 0 0 1 .34.628v5.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.302-1.436l12.5-5.5a.75.75 0 0 1 .712.058M6.317 7.5H14.5V3.9zM16 17.5a.5.5 0 0 1-.71.454l-13-6A.5.5 0 0 1 2.5 11h13a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentFlipVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
