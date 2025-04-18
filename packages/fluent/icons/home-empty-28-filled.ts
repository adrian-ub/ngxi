import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeEmpty28FilledIcon],svg[fluent-home-empty-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.592 3.498a2.25 2.25 0 0 1 2.816 0l7.75 6.217A2.25 2.25 0 0 1 24 11.47v11.28A2.25 2.25 0 0 1 21.75 25H6.25A2.25 2.25 0 0 1 4 22.75V11.47c0-.683.31-1.328.842-1.755z"></svg:path>`,
})
export class FluentHomeEmpty28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
