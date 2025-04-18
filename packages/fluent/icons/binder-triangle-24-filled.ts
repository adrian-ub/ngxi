import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBinderTriangle24FilledIcon],svg[fluent-binder-triangle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 2A2.25 2.25 0 0 0 3 4.25V5h-.75a.75.75 0 0 0 0 1.5H3v3.25h-.75a.75.75 0 0 0 0 1.5H3v3.25h-.75a.75.75 0 0 0 0 1.5H3v.75A2.25 2.25 0 0 0 5.25 19h1.785L17 6.546V4.25A2.25 2.25 0 0 0 14.75 2zm2.5 5h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5m11.47-1.622c.591-.738 1.781-.32 1.781.624V19.75a2.25 2.25 0 0 1-2.25 2.25H8.001a1 1 0 0 1-.78-1.625zm-5.245 12.216a.25.25 0 0 0 .195.406h2.33a.5.5 0 0 0 .5-.5v-2.977a.25.25 0 0 0-.445-.156z"></svg:path>`,
})
export class FluentBinderTriangle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
