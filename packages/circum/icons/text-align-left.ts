import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumTextAlignLeftIcon],svg[circum-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.438 4.063H3.563a.5.5 0 1 1 0-1h16.875a.5.5 0 1 1 0 1M12.562 8.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1m0 8h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1m7.874-4H3.562a.5.5 0 1 1 0-1h16.874a.5.5 0 0 1 0 1m0 8.437H3.562a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1"></svg:path>`,
})
export class CircumTextAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
