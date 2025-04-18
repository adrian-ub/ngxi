import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGameConsoleCableIcon],svg[marketeq-game-console-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v8.333m6.25 0h-12.5l1.042 4.167h10.416z"></svg:path><svg:path stroke="#306CFE" d="M34.23 14.583a8.333 8.333 0 0 1 8.333 7.75L43.75 39a4.418 4.418 0 0 1-4.667 4.75a4.67 4.67 0 0 1-4.166-3.792l-1.584-7.062a2.08 2.08 0 0 0-2.083-1.646H18.625a2.084 2.084 0 0 0-2.083 1.646l-1.521 7.062a4.67 4.67 0 0 1-4.167 3.792A4.416 4.416 0 0 1 6.25 39l1.188-16.667a8.334 8.334 0 0 1 8.333-7.75z"></svg:path></svg:g>`,
})
export class MarketeqGameConsoleCableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
