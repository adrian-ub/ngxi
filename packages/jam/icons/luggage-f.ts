import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamLuggageFIcon],svg[jam-luggage-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v12H7V4zm2 0a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5zM5 4v12a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5m.1 0a5.002 5.002 0 0 1 9.8 0h-2.07a3.001 3.001 0 0 0-5.66 0z"></svg:path>`,
})
export class JamLuggageFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
