import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeaker32FilledIcon],svg[fluent-beaker-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v8.438a4 4 0 0 1-.712 2.277L9.706 18h12.587l-1.582-2.285A4 4 0 0 1 20 13.438V5h1a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2zm11.677 15H8.322l-2.744 3.963C4.104 26.092 5.628 29 8.218 29h15.564c2.589 0 4.113-2.908 2.639-5.037z"></svg:path>`,
})
export class FluentBeaker32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
