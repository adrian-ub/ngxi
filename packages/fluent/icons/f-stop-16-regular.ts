import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFStop16RegularIcon],svg[fluent-f-stop-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.844 3.845a2.167 2.167 0 0 1 2.717-1.736l.805.223a.5.5 0 1 0 .267-.963l-.805-.223a3.167 3.167 0 0 0-3.97 2.536L7.31 7.001H4.5a.5.5 0 1 0 0 1h2.646l-.524 3.183a2.167 2.167 0 0 1-3.19 1.543l-.69-.383a.5.5 0 0 0-.485.874l.69.383c1.916 1.063 4.306-.093 4.662-2.254L8.159 8H10.5a.5.5 0 0 0 0-1H8.324z"></svg:path>`,
})
export class FluentFStop16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
