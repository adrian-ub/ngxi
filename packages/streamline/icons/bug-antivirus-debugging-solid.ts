import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusDebuggingSolidIcon],svg[streamline-bug-antivirus-debugging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.594 7a5.38 5.38 0 0 1 1.09-3.256l1.849 1.85v.001L8.736 9.8l.001-.001l1.519 1.518A5.406 5.406 0 0 1 1.594 7m6.003 3.428L3.442 6.273a.75.75 0 0 0 .183 1.477H4.5V8q0 .207.033.407l-.956.956a.75.75 0 0 0 1.06 1.06l.626-.625a2.49 2.49 0 0 0 2.334.63M5.263 4.202L3.744 2.684a5.406 5.406 0 0 1 7.572 7.572l-1.849-1.85Q9.501 8.208 9.5 8v-.25h.875a.75.75 0 0 0 0-1.5H9.5V6q0-.207-.033-.407l.956-.956a.75.75 0 1 0-1.06-1.06l-.626.625A2.5 2.5 0 0 0 7 3.5a2.5 2.5 0 0 0-1.737.702M13.906 7c0 1.903-.77 3.626-2.014 4.875l-.008.008l-.009.009A6.906 6.906 0 1 1 13.905 7Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugAntivirusDebuggingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
