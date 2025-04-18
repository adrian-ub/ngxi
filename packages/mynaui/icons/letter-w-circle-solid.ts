import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWCircleSolidIcon],svg[mynaui-letter-w-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
