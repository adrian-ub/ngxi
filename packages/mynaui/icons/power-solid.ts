import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPowerSolidIcon],svg[mynaui-power-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M6.543 5.812a.75.75 0 1 0-.992-1.124A9.73 9.73 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.73 9.73 0 0 0-3.3-7.312a.75.75 0 0 0-.993 1.124a8.25 8.25 0 1 1-10.914 0"></svg:path></svg:g>`,
})
export class MynauiPowerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
