import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRelationalGraphIcon],svg[icon-park-relational-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 35H44"></svg:path><svg:path d="M24 32C24 27.5817 20.1944 24 15.5 24C10.8056 24 7 27.5817 7 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 32C41 20.9543 33.3888 12 24 12C14.6112 12 7 20.9543 7 32"></svg:path><svg:circle cx="41" cy="35" r="3" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="35" r="3" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="7" cy="35" r="3" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkRelationalGraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
