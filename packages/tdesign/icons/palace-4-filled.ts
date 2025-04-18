import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace4FilledIcon],svg[tdesign-palace-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.698l4 3.334V9h4V5.032l4-3.334l4 3.334V22h-6.5v-3.5a3.5 3.5 0 1 0-7 0V22H2V5.032zM20 9V5.968l-2-1.666l-2 1.666V9zM4 9h4V5.968L6 4.302L4 5.968z"></svg:path><svg:path fill="currentColor" d="M12 17a1.5 1.5 0 0 0-1.5 1.5V22h3v-3.5A1.5 1.5 0 0 0 12 17"></svg:path>`,
})
export class TdesignPalace4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
