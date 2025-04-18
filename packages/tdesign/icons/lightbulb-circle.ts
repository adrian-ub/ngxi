import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbCircleIcon],svg[tdesign-lightbulb-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8.5 7h-5v-2h5zm.735-3h-6.47l-.235-.668c-.435-1.236-.978-2.398-1.488-3.456A5.4 5.4 0 0 1 6.5 9.5C6.5 6.467 8.967 4 12 4s5.5 2.467 5.5 5.5c0 .83-.181 1.631-.542 2.377c-.51 1.057-1.052 2.219-1.488 3.455zm-1.405-2a40 40 0 0 1 1.328-2.993q.341-.706.342-1.507C15.5 7.571 13.93 6 12 6a3.506 3.506 0 0 0-3.5 3.5q0 .799.343 1.507c.429.888.906 1.9 1.327 2.993z"></svg:path>`,
})
export class TdesignLightbulbCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
