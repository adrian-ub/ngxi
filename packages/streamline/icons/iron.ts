import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIronIcon],svg[streamline-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.59 5.5H8.91a8.78 8.78 0 0 0-8.32 6h11.82a1 1 0 0 0 .964-.73a1 1 0 0 0 .026-.43zm0 0l-.22-1.33a2 2 0 0 0-2-1.67H4.59"></svg:path>`,
})
export class StreamlineIronIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
