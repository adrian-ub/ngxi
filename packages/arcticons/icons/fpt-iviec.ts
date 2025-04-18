import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFptIviecIcon],svg[arcticons-fpt-iviec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.024 13.517l4.687-7.092l4.687 7.092l-4.687 7.091z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.384 5.5l3.7 8.387h13.32L24.018 29.55l-6.784-11.1l-4.933 7.092L21.55 42.5h4.933l16.342-28.613L38.818 5.5z"></svg:path>`,
})
export class ArcticonsFptIviecIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
