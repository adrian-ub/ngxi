import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLibrary28FilledIcon],svg[fluent-library-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.99 3a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 0a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-1.995a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm9.08 3.543l3.86 15.483a2 2 0 0 1-1.457 2.425l-1.963.49a2 2 0 0 1-2.424-1.458L16.226 8a2 2 0 0 1 1.456-2.425l1.963-.489a2 2 0 0 1 2.425 1.457"></svg:path>`,
})
export class FluentLibrary28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
