import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanObject20RegularIcon],svg[fluent-scan-object-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1zM17 4.5A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0zM15.5 17a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1zM8.767 6.903a1.5 1.5 0 0 1 2.467 0l2.591 3.743c.689.995-.023 2.354-1.233 2.354H7.409c-1.21 0-1.922-1.359-1.233-2.354zm1.644.57a.5.5 0 0 0-.822 0l-2.591 3.742a.5.5 0 0 0 .41.785h5.184a.5.5 0 0 0 .41-.785z"></svg:path>`,
})
export class FluentScanObject20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
