import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignContrastIcon],svg[tdesign-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m10-7.5h1a7.5 7.5 0 0 1 0 15h-1zm2 2.09v10.82a5.502 5.502 0 0 0 0-10.82"></svg:path>`,
})
export class TdesignContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
