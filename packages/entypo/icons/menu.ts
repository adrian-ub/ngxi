import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoMenuIcon],svg[entypo-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1m0 4H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1M3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1"></svg:path>`,
})
export class EntypoMenuIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
