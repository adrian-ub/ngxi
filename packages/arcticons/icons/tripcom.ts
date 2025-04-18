import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTripcomIcon],svg[arcticons-tripcom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.354 25.228a3.303 3.303 0 0 0 3.303 3.303h0a3.304 3.304 0 0 0 3.303-3.303V23.08a3.304 3.304 0 0 0-3.303-3.303h0a3.303 3.303 0 0 0-3.303 3.303m0-3.303V32.99"></svg:path><svg:circle cx="24.448" cy="15.73" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.448 19.777v8.753m-6.194-5.45a3.303 3.303 0 0 1 3.303-3.303h0m-3.303-.001v8.754M9.5 15.317h8.754m-4.377 13.214V15.316"></svg:path><svg:circle cx="37.155" cy="27.185" r="1.345" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTripcomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
