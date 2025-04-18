import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace4Icon],svg[tdesign-palace-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.698l4 3.334V9h4V5.032l4-3.334l4 3.334V22H2V5.032zM16 9h4V5.968l-2-1.666l-2 1.666zm4 2H4v9h5v-3a3 3 0 1 1 6 0v3h5zm-7 9v-3a1 1 0 1 0-2 0v3zM4 9h4V5.968L6 4.302L4 5.968z"></svg:path>`,
})
export class TdesignPalace4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
