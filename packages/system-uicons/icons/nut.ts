import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsNutIcon],svg[system-uicons-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><svg:path d="m6.5.5l6 4v6l-6 4l-6-4v-6z"></svg:path><svg:circle cx="6.5" cy="7.5" r="3"></svg:circle></svg:g>`,
})
export class SystemUiconsNutIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
