import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFtpclientIcon],svg[arcticons-ftpclient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 5.5h-33c-1.1 0-2 .9-2 2v12.4c0 1.1.9 2 2 2h33c1.1 0 2-.9 2-2V7.5c0-1.1-.9-2-2-2"></svg:path><svg:circle cx="13.6" cy="13.7" r="4.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 26.1h-33c-1.1 0-2 .9-2 2v12.4c0 1.1.9 2 2 2h33c1.1 0 2-.9 2-2V28.1c0-1.1-.9-2-2-2"></svg:path><svg:circle cx="13.6" cy="34.3" r="4.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsFtpclientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
