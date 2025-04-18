import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginAlertsSolidIcon],svg[bubbles-plugin-alerts-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.314 4.766a6.35 6.35 0 0 0-2.47 2.471M6.475 2A6.5 6.5 0 0 0 2 6.476M5 18.5h15"></svg:path><svg:path fill="currentColor" d="M20 18.5s-1.5-1.306-1.5-6c0-3.75-2.562-7.068-6-7.068s-6 3.318-6 7.068c0 4.72-1.5 6-1.5 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 18.5s-1.5-1.306-1.5-6c0-3.75-2.562-7.068-6-7.068s-6 3.318-6 7.068c0 4.72-1.5 6-1.5 6"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 19.5a1.5 1.5 0 1 1-3 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 5.432V3.5m5.186 1.266c.516.288.99.645 1.408 1.062a6.4 6.4 0 0 1 1.062 1.41M18.525 2A6.5 6.5 0 0 1 23 6.476"></svg:path></svg:g>`,
})
export class BubblesPluginAlertsSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
