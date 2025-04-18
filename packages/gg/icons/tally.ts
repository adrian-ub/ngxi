import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTallyIcon],svg[gg-tally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.661 2.671a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49L5.34 9.545a.63.63 0 0 1-.595.491h-2a.397.397 0 0 1-.405-.49zm5 0a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49L8.071 21.33a.63.63 0 0 1-.594.491h-2a.397.397 0 0 1-.405-.491zm5 0a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49l-3.59 18.658a.63.63 0 0 1-.594.491h-2a.397.397 0 0 1-.405-.491zm5 0a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49L20.34 9.545a.63.63 0 0 1-.595.491h-2a.397.397 0 0 1-.405-.49z"></svg:path>`,
})
export class GgTallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
