import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWalkieTalkie20FilledIcon],svg[fluent-walkie-talkie-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 7v2h4V7z"></svg:path><svg:path d="M7.5 1a.5.5 0 0 1 .5.5V3h6.5A1.5 1.5 0 0 1 16 4.5v7a.5.5 0 0 1-.084.277L14 14.651V16.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-1.849l-1.916-2.874A.5.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3H7V1.5a.5.5 0 0 1 .5-.5M7 6.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5m1 6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5"></svg:path></svg:g>`,
})
export class FluentWalkieTalkie20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
