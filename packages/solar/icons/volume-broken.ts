import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVolumeBrokenIcon],svg[solar-volume-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.959 8.577a3.2 3.2 0 0 1 1.381-1.3C7.94 7 8.626 7 10 7c.512 0 .768 0 1.016-.042q.37-.063.712-.214c.23-.101.444-.242.871-.524l.22-.144C15.36 4.399 16.632 3.56 17.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 19.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C10.768 17 10.512 17 10 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528"></svg:path>`,
})
export class SolarVolumeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
