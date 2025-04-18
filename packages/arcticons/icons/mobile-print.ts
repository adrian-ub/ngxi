import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilePrintIcon],svg[arcticons-mobile-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.831h39v20.475h-39z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.163 41.306V31.069H10.81v10.237m18.483-28.414V6.694H11.604v14.137h24.792v-7.939zm0-6.198l7.103 6.198m-10.516 0H15.573m16.715 3.621H15.573"></svg:path><svg:circle cx="39.461" cy="25.079" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMobilePrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
