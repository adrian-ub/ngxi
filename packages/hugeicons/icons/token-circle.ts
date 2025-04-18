import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTokenCircleIcon],svg[hugeicons-token-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.547 12.322c0-5.11 4.14-9.25 9.25-9.25s9.25 4.14 9.25 9.25s-4.14 9.25-9.25 9.25s-9.25-4.14-9.25-9.25m9.25-10.75c-5.94 0-10.75 4.81-10.75 10.75s4.81 10.75 10.75 10.75s10.75-4.81 10.75-10.75s-4.81-10.75-10.75-10.75m1.72 6.58l-.63-.98c-.51-.8-1.67-.8-2.18 0l-.63.98c-.63.99-1.46 1.82-2.45 2.45l-.98.63c-.8.51-.8 1.67 0 2.18l.98.63c.99.63 1.82 1.46 2.45 2.45l.63.98c.51.8 1.67.8 2.18 0l.63-.98c.63-.99 1.46-1.82 2.45-2.45l.98-.63c.8-.51.8-1.67 0-2.18l-.98-.63a8 8 0 0 1-2.45-2.45m-2.17.8l.45-.71l.45.71a9.5 9.5 0 0 0 2.92 2.92l.71.45l-.71.45a9.5 9.5 0 0 0-2.92 2.92l-.45.71l-.45-.71a9.5 9.5 0 0 0-2.92-2.92l-.71-.45l.71-.45a9.5 9.5 0 0 0 2.92-2.92" color="currentColor"></svg:path>`,
})
export class HugeiconsTokenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
