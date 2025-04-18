import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPsdownIcon],svg[whh-psdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m542 52l279 295q23 22 48.5 71t25.5 79v376q0 63-43.5 107T746 1024H149q-62 0-105.5-44T0 873V497q0-30 25-82t50-68L354 52q40-52 94-52t94 52"></svg:path>`,
})
export class WhhPsdownIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
