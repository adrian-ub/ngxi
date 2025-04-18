import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etClockIcon],svg[et-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 32c8.822 0 16-7.178 16-16S24.822 0 16 0S0 7.178 0 16s7.178 16 16 16m0-31c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16S7.729 1 16 1"></svg:path><svg:path d="M20.061 21.768a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.707L16 16.293V9.319a.5.5 0 0 0-1 0V16.5c0 .133.053.26.146.354z"></svg:path><svg:circle cx="4" cy="16" r="1"></svg:circle><svg:circle cx="28" cy="16" r="1"></svg:circle><svg:circle cx="16" cy="4" r="1"></svg:circle><svg:circle cx="16" cy="28" r="1"></svg:circle><svg:circle cx="8" cy="8" r="1"></svg:circle><svg:circle cx="24" cy="24" r="1"></svg:circle><svg:circle cx="25" cy="8" r="1"></svg:circle><svg:circle cx="8" cy="24" r="1"></svg:circle></svg:g>`,
})
export class EtClockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
