import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarOneSolidIcon],svg[mynaui-chart-bar-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75c-.69 0-1.25.56-1.25 1.25v18a1.25 1.25 0 1 0 2.5 0V3c0-.69-.56-1.25-1.25-1.25m6 5c-.69 0-1.25.56-1.25 1.25v13a1.25 1.25 0 1 0 2.5 0V8c0-.69-.56-1.25-1.25-1.25m-12 4c-.69 0-1.25.56-1.25 1.25v9a1.25 1.25 0 1 0 2.5 0v-9c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class MynauiChartBarOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
