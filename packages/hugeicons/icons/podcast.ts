import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPodcastIcon],svg[hugeicons-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25C3.75 7.69 7.44 4 12 4s8.25 3.69 8.25 8.25c0 1.7-.51 3.27-1.39 4.58c-.23.35-.14.81.21 1.04c.34.23.81.14 1.04-.2a9.7 9.7 0 0 0 1.64-5.42c0-5.38-4.37-9.75-9.75-9.75s-9.75 4.37-9.75 9.75c0 2 .61 3.87 1.64 5.42a.753.753 0 0 0 1.25-.84a8.17 8.17 0 0 1-1.39-4.58M12 7.5c-2.07 0-3.75 1.68-3.75 3.75v2c0 1.81 1.29 3.33 3 3.67v2.02l-1.78 1.78A.751.751 0 0 0 10 22h4c.3 0 .58-.18.69-.46c.12-.28.05-.61-.16-.82l-1.78-1.78v-2.02c1.71-.34 3-1.86 3-3.67v-2c0-2.07-1.68-3.75-3.75-3.75m2.25 5.75c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-2C9.75 10.01 10.76 9 12 9s2.25 1.01 2.25 2.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsPodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
