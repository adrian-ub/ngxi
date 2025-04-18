import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9CircleLightIcon],svg[iconamoon-number-9-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M10.373 16.589a.75.75 0 0 0 1.254.822zm4.78-4.557a.75.75 0 0 0-1.255-.822zM9.75 10A2.25 2.25 0 0 1 12 7.75v-1.5A3.75 3.75 0 0 0 8.25 10zM12 7.75A2.25 2.25 0 0 1 14.25 10h1.5A3.75 3.75 0 0 0 12 6.25zM14.25 10A2.25 2.25 0 0 1 12 12.25v1.5A3.75 3.75 0 0 0 15.75 10zM12 12.25A2.25 2.25 0 0 1 9.75 10h-1.5A3.75 3.75 0 0 0 12 13.75zm-.373 5.161l3.525-5.38l-1.254-.821l-3.525 5.379z"></svg:path></svg:g>`,
})
export class IconamoonNumber9CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
