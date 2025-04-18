import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWand16RegularIcon],svg[fluent-wand-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 1a.5.5 0 0 1 .5.5V2h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0V3h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5m-10 2a.5.5 0 0 1 .5.5V4h.5a.5.5 0 1 1 0 1H4v.5a.5.5 0 1 1-1 0V5h-.5a.5.5 0 0 1 0-1H3v-.5a.5.5 0 0 1 .5-.5m9 9a.5.5 0 0 0 0-1H12v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V12zM8.73 4.563a1.914 1.914 0 0 1 2.707 2.708l-7.17 7.17a1.914 1.914 0 0 1-2.707-2.708zm-.48 1.894L2.267 12.44a.914.914 0 0 0 1.293 1.293L9.543 7.75zm2 .586l.48-.48a.914.914 0 1 0-1.293-1.292l-.48.48z"></svg:path>`,
})
export class FluentWand16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
