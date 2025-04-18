import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlasses16FilledIcon],svg[fluent-glasses-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.168 3.126A.5.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-.81L3.438 6H5.5A1.5 1.5 0 0 1 7 7.5V8h2v-.5A1.5 1.5 0 0 1 10.5 6h2.062L10.31 4H9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .332.126l3.622 3.216A1.5 1.5 0 0 1 15 7.5v2a2.5 2.5 0 0 1-2.5 2.5h-1A2.5 2.5 0 0 1 9 9.5V9H7v.5A2.5 2.5 0 0 1 4.5 12h-1A2.5 2.5 0 0 1 1 9.5v-2a1.5 1.5 0 0 1 .546-1.158z"></svg:path>`,
})
export class FluentGlasses16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
