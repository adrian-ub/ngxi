import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTap05Icon],svg[hugeicons-tap-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.984 6.011c0-2.215-1.78-4.01-3.974-4.01s-3.973 1.795-3.973 4.01"></svg:path><svg:path d="m9.376 21.992l-.105-1.096c-.487-2.017-1.153-2.283-2.238-3.729c-.49-.653-1.513-1.578-2.35-2.827c-.557-.833.187-2.725 1.882-2.148c.283.096.52.288.73.5l1.647 1.653c-.014-2.337.016-7.096-.02-8.556s2.498-1.93 2.647.066v4.491m0 0v.866m0-.866c.829-1.098 2.397-1.136 2.625.702m0 0c.037.3.04.649 0 1.052m0-1.052c.419-1.284 2.258-.774 2.624.72m0 0c.087.354 0 .765.035 1.238m-.035-1.238c.238-.72 2.866-.773 2.616 2.01L19.5 16.3c-.101 1.507-.322 2.139-.864 2.867c-.28.378-.648.71-.789 1.16c-.118.375-.192.926-.11 1.672"></svg:path></svg:g>`,
})
export class HugeiconsTap05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
