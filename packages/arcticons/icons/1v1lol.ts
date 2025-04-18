import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1v1lolIcon],svg[arcticons-1v1lol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.67 25.439v4.043h2.14m5.903-4.043v4.043h2.14M9.146 20.01l2.724-1.493v10.965m9.51-9.472l2.724-1.493v10.965m-5.506-5.36l-1.973 5.36l-1.974-5.36m18.942 1.317c.785 0 1.418.597 1.418 1.34v1.364c0 .742-.633 1.34-1.418 1.34s-1.419-.598-1.419-1.34v-1.365c0-.742.633-1.339 1.418-1.339"></svg:path><svg:circle cx="26.445" cy="29.233" r=".75" fill="currentColor"></svg:circle>`,
})
export class Arcticons1v1lolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
