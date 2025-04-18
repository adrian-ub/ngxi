import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWand16FilledIcon],svg[fluent-wand-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1.5a.5.5 0 0 0-1 0V2h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V3h.5a.5.5 0 0 0 0-1H14zm-10 2a.5.5 0 0 0-1 0V4h-.5a.5.5 0 0 0 0 1H3v.5a.5.5 0 0 0 1 0V5h.5a.5.5 0 0 0 0-1H4zm9 8a.5.5 0 0 1-.5.5H12v.5a.5.5 0 0 1-1 0V12h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 .5.5M8.73 4.563a1.914 1.914 0 0 1 2.707 2.708l-.48.48L8.25 5.042zM7.543 5.75l2.707 2.707l-5.983 5.983a1.914 1.914 0 0 1-2.707-2.707z"></svg:path>`,
})
export class FluentWand16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
