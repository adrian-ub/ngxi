import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocument10020FilledIcon],svg[fluent-document-100-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v8.264a2.997 2.997 0 0 1 4.5.577A3 3 0 0 1 14 14v2c0 .768-.289 1.47-.764 2H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5m1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5m-8 6.097c0-.199-.1-.348-.202-.437a.64.64 0 0 0-.298-.142c-.133-.025-.5-.03-.669.319c-.2.413-.544.931-1.074 1.226a.5.5 0 1 0 .486.874A3.2 3.2 0 0 0 2 13.845V17.5a.5.5 0 0 0 1 0zM4 14a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m5-1a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2m-1 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentDocument10020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
