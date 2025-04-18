import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPulse24RegularIcon],svg[fluent-pulse-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.462 6.81l3.284 13.616c.178.737 1.211.775 1.443.054l3.257-10.122l.586 2.095a.75.75 0 0 0 .722.548h3.494a.75.75 0 0 0 0-1.5h-2.925l-1.105-3.95c-.2-.717-1.208-.736-1.436-.028l-3.203 9.957L9.224 3.574c-.182-.757-1.255-.769-1.454-.016l-2.1 7.943H2.75a.75.75 0 0 0 0 1.5h3.496a.75.75 0 0 0 .725-.558z"></svg:path>`,
})
export class FluentPulse24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
