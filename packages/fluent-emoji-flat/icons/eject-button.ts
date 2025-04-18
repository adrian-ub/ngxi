import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEjectButtonIcon],svg[fluent-emoji-flat-eject-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M16.687 9.649a1 1 0 0 0-1.374 0l-7.011 6.624c-.658.621-.218 1.727.686 1.727h14.024c.904 0 1.344-1.106.686-1.727zM8 22.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEjectButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
