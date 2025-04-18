import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFactorialIcon],svg[streamline-factorial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5V10M1 13.5V6a4 4 0 1 1 8 0v7.5M1 2v4m11 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path>`,
})
export class StreamlineFactorialIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
