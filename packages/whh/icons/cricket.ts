import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCricketIcon],svg[whh-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.556 256q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m108 653l-95 95q-19 20-47 20t-48-20l-474-474q-20-20-20-48t20-47l9-9l-150-150l-177-96q-22-21-22-52t22-53l53-53q22-22 53-22t52 22l96 177l150 150l9-9q19-20 47-20t48 20l474 474q20 20 20 48t-20 47"></svg:path>`,
})
export class WhhCricketIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
