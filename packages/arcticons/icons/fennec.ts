import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFennecIcon],svg[arcticons-fennec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 17.05L7.2 6.61a1.77 1.77 0 0 0-2.7 1.5v22ZM7.2 6.61l9.16 15.54"></svg:path><svg:circle cx="18.14" cy="30.54" r="1.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="39.44" r="2.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.05l-19.5 13L22.4 41.2a3 3 0 0 0 3.2 0l17.9-11.12Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 17.05L40.8 6.61a1.77 1.77 0 0 1 2.7 1.5v22ZM40.8 6.61l-9.16 15.54"></svg:path><svg:circle cx="29.86" cy="30.54" r="1.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsFennecIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
