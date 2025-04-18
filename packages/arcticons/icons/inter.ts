import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterIcon],svg[arcticons-inter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.62 24.332a2.88 2.88 0 0 1 2.88-2.88h0m-2.881 0v7.633"></svg:path><svg:circle cx="11.373" cy="18.923" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.696 19.075v8.57c0 .796.645 1.44 1.44 1.44h.433m-1.873-7.633h1.873m-15.069 0h1.873v7.633m8.561.001v-4.754a2.88 2.88 0 0 0-2.88-2.88h0a2.88 2.88 0 0 0-2.881 2.88v4.753m-.001-4.753v-2.88m18.297 6.18a2.88 2.88 0 0 1-2.503 1.453h0a2.88 2.88 0 0 1-2.881-2.88v-1.873a2.88 2.88 0 0 1 2.88-2.88h0a2.88 2.88 0 0 1 2.881 2.88v.936h-5.761"></svg:path>`,
})
export class ArcticonsInterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
