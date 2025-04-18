import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush24FilledIcon],svg[fluent-paint-brush-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2v3.252a.75.75 0 0 0 1.5 0V2h1v4.251a.75.75 0 0 0 1.5 0V2h1.75a.75.75 0 0 1 .75.75V11H5V2.75A.75.75 0 0 1 5.75 2zM5 12.5v1.752a2.25 2.25 0 0 0 2.25 2.25H10V20a2 2 0 1 0 4 0v-3.498h2.75a2.25 2.25 0 0 0 2.25-2.25V12.5z"></svg:path>`,
})
export class FluentPaintBrush24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
