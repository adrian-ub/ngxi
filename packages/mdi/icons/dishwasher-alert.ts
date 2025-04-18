import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDishwasherAlertIcon],svg[mdi-dishwasher-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M8 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m11 16H4V8h12zm-3.33-4.67c.02.7-.26 1.38-.76 1.88a2.7 2.7 0 0 1-3.82 0c-.5-.5-.78-1.18-.76-1.88c.07-.71.3-1.39.67-2c.37-.83.81-1.6 1.33-2.33l.67-1c1.79 2.59 2.67 4.36 2.67 5.33M20 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiDishwasherAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
