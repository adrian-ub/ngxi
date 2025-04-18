import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlaskLightIcon],svg[lets-icons-flask-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M15.5 10.5v8.002a3 3 0 0 1-6-.002v-8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 8.5h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1h3"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" d="M13.5 18.5v-3h-2v3a1 1 0 1 0 2 0Z"></svg:path><svg:circle cx="16" cy="4" r="1.5" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:circle cx="13.5" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="5.5" r="1" stroke="currentColor" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class LetsIconsFlaskLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
