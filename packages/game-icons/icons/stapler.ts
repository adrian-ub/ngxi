import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStaplerIcon],svg[game-icons-stapler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476.5 195.8L52.59 216.6l-6.56 28.7H186l2.2 15.3h298.1zM41.78 271l-20.77 92.6l6.56 27.6H486.6l4.4-27.6l-311.4-2.2L161 271zm150.72 8.1l7.1 41h269.5v-41zM427 295h26.4c3.8 0 6.8 3 6.8 6.9c0 3.6-3 6.7-6.8 6.7H427c-3.9 0-6.9-3.1-6.9-6.7c0-3.9 3-6.9 6.9-6.9"></svg:path>`,
})
export class GameIconsStaplerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
