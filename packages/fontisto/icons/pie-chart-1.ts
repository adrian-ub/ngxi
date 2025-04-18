import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPieChart1Icon],svg[fontisto-pie-chart-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h12c0-6.627-5.373-12-12-12z"></svg:path><svg:path fill="currentColor" d="M10.5 13.5V.105C4.552.873.002 5.905 0 12c0 6.627 5.373 12 12 12c6.095-.003 11.127-4.552 11.889-10.44l.006-.06z"></svg:path>`,
})
export class FontistoPieChart1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
