import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBattleheartIcon],svg[arcticons-battleheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.56 27.33c3-1.13 6-1.8 9.18-.53l.68 6.77a15 15 0 0 1-3.94 5.32a11.3 11.3 0 0 1-5.66-5.75Zm1.57-7.07a2.1 2.1 0 0 1 2.81-1a3 3 0 0 1 1.35 3.13A2.46 2.46 0 0 1 28 24.64m0 0v1.69"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.13 20.26l-1.49.14l1-6.76c-.29-1.05-1.41-2-1.88-1.64c-1.89 6.77-3.76 13.55-4.1 20.71L12 42c1.9.21 3.84.51 5.35 0L24 36.64a1.33 1.33 0 0 1 2 .17l7.08 6.58c1.71.35 2.6-.2 2.91-.76l-4-5.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.66 13.64c.94.11 3.22 1 .38-1.87c-1.04-1.08-3.12-2.43-2.26.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.39 12.15l6.23-4.81l.71-2.84l-3.33.7l-4.64 6"></svg:path>`,
})
export class ArcticonsBattleheartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
