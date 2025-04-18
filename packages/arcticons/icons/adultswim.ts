import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdultswimIcon],svg[arcticons-adultswim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M27.269 30.627c1.03 1.34 2.321 1.84 4.118 1.84h2.486a4.19 4.19 0 0 0 4.19-4.19v-.017a4.19 4.19 0 0 0-4.19-4.19H31.13a4.194 4.194 0 0 1-4.194-4.194h0a4.203 4.203 0 0 1 4.203-4.203h2.473c1.797 0 3.088.5 4.118 1.84m-15.023 8.564c0 3.53-2.84 6.39-6.342 6.39h-2.226c-2.32 0-4.201-1.895-4.201-4.233c0-2.339 1.88-4.234 4.201-4.234h8.58"></svg:path><svg:path d="M11.535 17.21c1.54-1.542 2.62-1.677 5.592-1.677c3.374 0 5.591 1.484 5.591 5.496v11.438"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 37.5h-6v-27h6m27 0h6v27h-6"></svg:path>`,
})
export class ArcticonsAdultswimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
