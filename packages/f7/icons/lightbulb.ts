import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LightbulbIcon],svg[f7-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.504 43.152h16.969c.797 0 1.289-.492 1.289-1.289v-3.75c0-5.672 8.25-9.328 8.25-19.453C46.012 7.996 38.793.871 27.988.871s-18 7.125-18 17.79c0 10.124 8.227 13.78 8.227 19.452v3.75c0 .797.515 1.29 1.289 1.29m2.203-4.992c0-6.89-8.18-10.57-8.18-19.476c0-8.579 5.79-14.274 14.461-14.274c8.672 0 14.485 5.695 14.485 14.274c0 8.906-8.203 12.586-8.203 19.476v1.453H21.707Zm-1.336 11.32h15.235c1.195 0 2.156-.984 2.156-2.203s-.961-2.203-2.157-2.203H20.371c-1.195 0-2.156.985-2.156 2.203c0 1.22.96 2.203 2.156 2.203m7.617 5.649c3.235 0 5.508-1.477 5.742-3.75H22.246c.211 2.273 2.484 3.75 5.742 3.75"></svg:path>`,
})
export class F7LightbulbIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
