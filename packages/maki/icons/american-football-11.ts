import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiAmericanFootball11Icon],svg[maki-american-football-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.53 2C2.47 2 1 5.5 1 5.5S2.47 9 5.53 9S10 5.5 10 5.5S8.6 2 5.53 2zM7 6H4a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1z" fill="currentColor"></svg:path>`,
})
export class MakiAmericanFootball11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
