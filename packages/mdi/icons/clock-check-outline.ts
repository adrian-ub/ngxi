import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClockCheckOutlineIcon],svg[mdi-clock-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-10.4 2.9c-.4.1-.7.1-1.1.1c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8c0 .4 0 .7-.1 1.1c.7.1 1.3.3 1.9.6c.1-.6.2-1.1.2-1.7c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c.6 0 1.2-.1 1.7-.2c-.3-.5-.5-1.2-.6-1.9m2.5-5.8l-3.1-1.8V7H11v6l3.5 2.1c.3-.4.7-.7 1.1-1"></svg:path>`,
})
export class MdiClockCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
