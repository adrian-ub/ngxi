import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader1Lines16RegularIcon],svg[fluent-text-header-1-lines-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.002 2.499a.5.5 0 1 0-1 0v5.005a.5.5 0 1 0 1 0V5.5h3v2a.5.5 0 0 0 1 0v-5a.5.5 0 1 0-1 0v2.001h-3zM1 10.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 2.998a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5M10 2.5a.5.5 0 0 0-.947-.224c-.165.33-.42.59-.647.771a3 3 0 0 1-.36.246l-.019.01h-.002a.5.5 0 0 0 .449.894l.002-.001l.004-.002q.087-.045.169-.096c.092-.057.214-.138.351-.245V7.5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTextHeader1Lines16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
