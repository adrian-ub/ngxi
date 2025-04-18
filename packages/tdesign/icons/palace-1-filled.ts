import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace1FilledIcon],svg[tdesign-palace-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h4v13h-2v-4.5a3.5 3.5 0 1 0-7 0V22h-2v-4.5a3.5 3.5 0 1 0-7 0V22H2V9h4a6 6 0 0 1 5.002-5.917l.002-1.085zm-2.006 3.996v2.004h2.004V5.998z"></svg:path><svg:path fill="currentColor" d="M7.5 16A1.5 1.5 0 0 0 6 17.5V22h3v-4.5A1.5 1.5 0 0 0 7.5 16m9 0a1.5 1.5 0 0 0-1.5 1.5V22h3v-4.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class TdesignPalace1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
