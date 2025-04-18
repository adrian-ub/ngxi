import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkladomIcon],svg[arcticons-skladom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="13.679"></svg:circle><svg:path d="m5.5 5.5l8.828 8.828M42.5 5.5l-8.828 8.828M42.5 42.5l-8.828-8.828M5.5 42.5l8.828-8.828"></svg:path><svg:circle cx="29.91" cy="17.952" r="2.463"></svg:circle><svg:circle cx="29.91" cy="30.048" r="2.463"></svg:circle></svg:g>`,
})
export class ArcticonsSkladomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
