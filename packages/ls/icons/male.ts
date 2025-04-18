import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMaleIcon],svg[ls-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 76c0-42-34-76-76-76c-41 0-75 34-75 76s34 76 75 76c42 0 76-34 76-76M25 177h253c14 0 25 11 25 25v164c0 14-11 26-25 26s-25-12-25-26v-75c0-14-7-26-16-26s-16 12-16 26v404c0 14-11 25-25 25s-25-11-25-25V518c0-14-9-25-19-25c-11 0-19 11-19 25v177c0 14-12 25-26 25s-25-11-25-25V291c0-14-7-26-16-26c-8 0-15 12-15 26v75c0 14-12 26-26 26S0 380 0 366V202c0-14 11-25 25-25"></svg:path>`,
})
export class LsMaleIcon {
  readonly viewBox = input("0 0 303 720")
  readonly width = input("0.43em")
  readonly height = input("1em")
}
