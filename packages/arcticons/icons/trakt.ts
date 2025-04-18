import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTraktIcon],svg[arcticons-trakt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.904 4.433L8.141 29.121zm6.331 34.737L18.699 18.638zM32.757 8.637L22.441 18.979zm.448 3.609l-8.858 8.915zM8.64 32.764l10.034-10.065l18.178 18.178"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.804 37.657l10.932-10.932L34.313 42.55"></svg:path>`,
})
export class ArcticonsTraktIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
