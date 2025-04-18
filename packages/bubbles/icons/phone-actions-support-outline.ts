import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPhoneActionsSupportOutlineIcon],svg[bubbles-phone-actions-support-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m.818 10.721l1.082 1.08a3 3 0 0 0 4.242 0l1.591-1.592a1.5 1.5 0 0 0 0-2.122L4.64 5a1.5 1.5 0 0 0-2.263.148c-3.241 4.4-1.277 9.036 2.706 13.02s8.62 5.946 13.023 2.705a1.5 1.5 0 0 0 .147-2.263l-3.094-3.094a1.5 1.5 0 0 0-2.122 0l-1.59 1.591a3 3 0 0 0 0 4.243l1.094 1.094m.212-18.694c.3-.9.663-2.25 2.321-2.25a2.18 2.18 0 0 1 2.18 2.179v0a2 2 0 0 1-.58 1.4L12.753 9h4.5m5.997-1.5h-3.747l3.747-6V9"></svg:path>`,
})
export class BubblesPhoneActionsSupportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
