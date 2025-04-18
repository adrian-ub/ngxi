import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRadarIcon],svg[tdesign-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.055A9.001 9.001 0 0 0 12 21a9 9 0 0 0 9-9c0-1.98-.638-3.808-1.72-5.293l-.59-.809l1.617-1.177l.59.808A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1h1v9.268A2.01 2.01 0 0 1 14 12a2 2 0 1 1-3-1.732V7.612a4.502 4.502 0 0 0 1 8.888a4.5 4.5 0 0 0 3.64-7.146l-.589-.809l1.617-1.177l.589.808A6.5 6.5 0 1 1 11 5.576z"></svg:path>`,
})
export class TdesignRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
