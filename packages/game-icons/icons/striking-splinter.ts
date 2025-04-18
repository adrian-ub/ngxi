import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStrikingSplinterIcon],svg[game-icons-striking-splinter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.018 20.705l135.64 163.623l-107.33-32.39l168.79 111.326L82.784 224.11l192.51 111.87l-130.525-1.76l282.08 126.116a429 429 0 0 0 42.728 19.246l2.297.885l20.797 9.3l-16.895-37.82a399 399 0 0 0-12.03-26.926L338.312 144.24l1.094 129.362L228.352 82.393l38.482 136.49L155.906 50.668l31.684 106.467zm225.148 225.178c94.262 38.75 169.608 116.195 208.152 207.924c-91.01-40.827-168.835-115.908-208.152-207.924"></svg:path>`,
})
export class GameIconsStrikingSplinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
