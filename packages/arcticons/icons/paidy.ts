import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaidyIcon],svg[arcticons-paidy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.094 30.156c0 2.274-1.2 4.379-3.156 5.537l-9.334 5.53a9.15 9.15 0 0 1-9.33 0l-9.334-5.53a6.44 6.44 0 0 1-3.156-5.537V16.1c0-4.409 3.352-8.277 7.756-8.482c2.606-.121 5.002.946 6.535 2.784c1.646 1.972 4.7 6.113 6.405 8.036c1.215 1.37 3.047 2.131 5.01 2.212c4.154.171 7.811-3.203 7.924-7.36A7.578 7.578 0 0 0 26.48 7.72"></svg:path><svg:circle cx="40.094" cy="24.437" r="2.122" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.844 35.087v-14.03"></svg:path>`,
})
export class ArcticonsPaidyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
