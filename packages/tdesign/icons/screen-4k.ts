import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignScreen4kIcon],svg[tdesign-screen-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm12 3v2.048l1-.708V8h2v1.598a1.5 1.5 0 0 1-.633 1.225L15.703 12l1.664 1.177A1.5 1.5 0 0 1 18 14.402V16h-2v-1.34l-1-.708V16h-2V8zM7 8v3.429h2V8h2v8H9v-2.571H7a2 2 0 0 1-2-2V8z"></svg:path>`,
})
export class TdesignScreen4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
