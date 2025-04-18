import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMobilePhone11Icon],svg[maki-mobile-phone-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 2v-.5a.5.5 0 0 0-1 0V2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM5 9H4V8h1zm0-2H4V6h1zm2 2H6V8h1zm0-2H6V6h1zm0-2H4V3h3z" fill="currentColor"></svg:path>`,
})
export class MakiMobilePhone11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
