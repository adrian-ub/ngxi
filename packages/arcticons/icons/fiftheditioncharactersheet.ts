import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFiftheditioncharactersheetIcon],svg[arcticons-fiftheditioncharactersheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l16.89 9.75v19.5L24 43.5L7.11 33.75v-19.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.17L13.74 30.93h20.52z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.26 30.93l6.63-16.68L24 13.17zM24 13.17L7.11 14.25l6.63 16.68zM13.74 30.93L24 43.5L7.11 33.75zm20.52 0L24 43.5l16.89-9.75zM24 4.5v8.67"></svg:path>`,
})
export class ArcticonsFiftheditioncharactersheetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
