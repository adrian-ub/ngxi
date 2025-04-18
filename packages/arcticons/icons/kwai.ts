import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKwaiIcon],svg[arcticons-kwai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.85 42.5h13.478a5.39 5.39 0 0 0 5.39-5.391v-7.764a5.39 5.39 0 0 0-5.39-5.391H20.85a5.39 5.39 0 0 0-5.39 5.39v7.765a5.39 5.39 0 0 0 5.39 5.391"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="18.328" cy="13.261" r="7.761"></svg:circle><svg:circle cx="32.904" cy="14.206" r="6.815"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.46 30.594l-4.483-2.588c-1.198-.692-2.696.173-2.696 1.556v7.353c0 1.383 1.498 2.248 2.696 1.556l4.482-2.588"></svg:path>`,
})
export class ArcticonsKwaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
