import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDoorIcon],svg[game-icons-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 41v398h302V41zm55 174c18.1 0 33 14.9 33 33s-14.9 33-33 33s-33-14.9-33-33s14.9-33 33-33m0 18c-8.4 0-15 6.6-15 15s6.6 15 15 15s15-6.6 15-15s-6.6-15-15-15M73 457v30h366v-30z"></svg:path>`,
})
export class GameIconsDoorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
