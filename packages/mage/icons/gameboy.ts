import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGameboyIcon],svg[mage-gameboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 2.75H7a3 3 0 0 0-3 3v12.5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5.75a3 3 0 0 0-3-3"></svg:path><svg:path d="M16.5 5.56h-9c-.552 0-1 .383-1 .857v4.286c0 .473.448.857 1 .857h9c.552 0 1-.384 1-.857V6.417c0-.474-.448-.857-1-.857m-7.967 8.552v3.473m-1.737-1.737h3.46M12 19h2m1.136-2.904v.4m1.764-2.384v.4"></svg:path></svg:g>`,
})
export class MageGameboyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
