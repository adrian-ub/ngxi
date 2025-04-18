import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrinkMargarita24FilledIcon],svg[fluent-drink-margarita-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.49 2.627a.75.75 0 0 1-.617.863l-5.49.915l-.118.595h3.985a.75.75 0 0 1 .75.75v4a3.25 3.25 0 0 1-3 3.24v.51c0 1.953-1.4 3.579-3.25 3.93v3.07h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-3.07A4 4 0 0 1 8 13.5v-.51a3.25 3.25 0 0 1-3-3.24v-4A.75.75 0 0 1 5.75 5h6.985l.28-1.397a.75.75 0 0 1 .612-.593l6-1a.75.75 0 0 1 .863.617M11.985 8.75l.45-2.25H6.5v2.25zm5.515 0V6.5h-3.535l-.45 2.25z"></svg:path>`,
})
export class FluentDrinkMargarita24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
