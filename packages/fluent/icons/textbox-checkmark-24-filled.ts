import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxCheckmark24FilledIcon],svg[fluent-textbox-checkmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 11a6.47 6.47 0 0 1 3.5 1.022V5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272A6.47 6.47 0 0 1 11 17.5q0-.51.076-1H6.75l-.102-.007A.75.75 0 0 1 6.75 15h4.748a6.5 6.5 0 0 1 1.848-2.5H6.75l-.102-.007A.75.75 0 0 1 6.75 11h7.5l.102.007a.75.75 0 0 1 .61.507A6.5 6.5 0 0 1 17.5 11M6.75 8.5l-.102-.007A.75.75 0 0 1 6.75 7h10.5l.102.007A.75.75 0 0 1 17.25 8.5zm16.25 9a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentTextboxCheckmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
