import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6CircleLightIcon],svg[iconamoon-number-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M13.627 7.411a.75.75 0 0 0-1.254-.822zm-4.78 4.557a.75.75 0 0 0 1.255.822zM14.25 14A2.25 2.25 0 0 1 12 16.25v1.5A3.75 3.75 0 0 0 15.75 14zM12 16.25A2.25 2.25 0 0 1 9.75 14h-1.5A3.75 3.75 0 0 0 12 17.75zM9.75 14A2.25 2.25 0 0 1 12 11.75v-1.5A3.75 3.75 0 0 0 8.25 14zM12 11.75A2.25 2.25 0 0 1 14.25 14h1.5A3.75 3.75 0 0 0 12 10.25zm.373-5.161l-3.525 5.38l1.254.821l3.525-5.379z"></svg:path></svg:g>`,
})
export class IconamoonNumber6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
