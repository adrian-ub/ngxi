import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsDiceSharpIcon],svg[famicons-dice-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 366.92L240 480V284L48 170ZM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24s-16-10.75-16-24s7.16-24 16-24m-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24s-16-10.75-16-24s7.16-24 16-24m176-36v196l192-113.08V170Zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24M256 32L64 144l192 112l192-112Zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16"></svg:path>`,
})
export class FamiconsDiceSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
