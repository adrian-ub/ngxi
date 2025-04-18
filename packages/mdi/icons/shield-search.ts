import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldSearchIcon],svg[mdi-shield-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.86 10.31C16.23 21.22 14.28 22.45 12 23c-2.56-.61-4.7-2.07-6.42-4.37C3.86 16.34 3 13.8 3 11V5l9-4l9 4v6c0 2.39-.64 4.61-1.92 6.67l-2.91-2.91c.52-.79.83-1.76.83-2.76a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5c1 0 1.97-.31 2.76-.83z"></svg:path>`,
})
export class MdiShieldSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
