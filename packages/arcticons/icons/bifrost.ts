import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBifrostIcon],svg[arcticons-bifrost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 26.135l6.806 6.27l6.796-6.27zm0 10.451h13.602m9.411-13.591c-5.231-1.05-5.231-6.796 1.04-7.32c0-5.231 9.42-6.282 9.42 1.039c4.706 0 4.706 6.28-.02 6.28z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.69 26.135c0-13.601 11.148-16.742 20.913-13.601"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.427 26.135c.354-13.601 11.855-14.127 17.782-12.208"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.174 26.135c.172-10.46 8.018-12.551 15.542-10.675"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.91 26.135c0-7.32 5.231-10.46 10.987-9.421"></svg:path>`,
})
export class ArcticonsBifrostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
