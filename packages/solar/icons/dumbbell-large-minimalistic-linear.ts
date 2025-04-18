import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticLinearIcon],svg[solar-dumbbell-large-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88m-7.991.318c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42zm8-8c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.022.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.185 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.019 2.498l3.104 3.104M2.498 18.019l3.104 3.104"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
