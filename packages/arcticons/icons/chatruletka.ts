import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChatruletkaIcon],svg[arcticons-chatruletka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.004 2.5c-2.001.005-3.992.29-5.914.846a6 6 0 0 1-5.975 5.802a6 6 0 0 1-2.88-.754a21.5 21.5 0 0 0-6.069 10.38a6 6 0 0 1 2.838 5.1A6 6 0 0 1 3.094 29A21.5 21.5 0 0 0 9.07 39.451a6 6 0 0 1 2.82-.73a6 6 0 0 1 5.995 5.873c1.985.595 4.046.9 6.119.906a21.5 21.5 0 0 0 5.914-.846a6 6 0 0 1 5.975-5.803c1.01.003 2.002.26 2.886.749a21.5 21.5 0 0 0 6.067-10.396a6 6 0 0 1-2.84-5.073a6 6 0 0 1 2.9-5.12a21.5 21.5 0 0 0-5.959-10.466a6 6 0 0 1-2.83.735a6 6 0 0 1-5.984-5.887a21.5 21.5 0 0 0-6.13-.893z"></svg:path><svg:circle cx="24.004" cy="24" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.004" cy="12.196" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.226" cy="18.098" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.226" cy="29.902" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.004" cy="35.804" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.782" cy="29.902" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.782" cy="18.098" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsChatruletkaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
