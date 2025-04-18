import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircledCircleFilledIcon],svg[pepicons-pop-clipboard-check-circled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClipboardCheckCircledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.68 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.68a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z"></svg:path><svg:path d="M8 19V8h1V6H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.337a5.5 5.5 0 0 1-1.737-2zm10-7.793c.742.21 1.421.572 2 1.05V7a1 1 0 0 0-1-1h-2v2h1z"></svg:path><svg:path d="M16.5 20a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path><svg:path d="M18.87 14.72a1 1 0 0 1 .156 1.405l-1.65 2.063a1.5 1.5 0 0 1-2.233.124l-1.104-1.105a1 1 0 0 1 1.414-1.414l.71.71l1.302-1.628a1 1 0 0 1 1.405-.156"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClipboardCheckCircledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClipboardCheckCircledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
