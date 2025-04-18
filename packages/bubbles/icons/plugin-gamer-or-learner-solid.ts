import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginGamerOrLearnerSolidIcon],svg[bubbles-plugin-gamer-or-learner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="m13.397 2.024l1.41 3.106h2.743a.674.674 0 0 1 .474 1.176L15.65 8.6l1.32 3.037a.72.72 0 0 1-1.025.9l-3.195-1.801l-3.19 1.8a.72.72 0 0 1-1.024-.9L9.856 8.6L7.473 6.306A.673.673 0 0 1 7.95 5.13h2.741l1.413-3.106a.727.727 0 0 1 1.293 0"></svg:path><svg:path d="m8.574 18.833l.369 2.6A.5.5 0 0 1 8.52 22l-2.594.37m.347-5.537l-.236 1.957a.5.5 0 0 1-.554.436l-1.951-.237m1.18-5.022l-.634 1.58a.5.5 0 0 1-.648.278l-1.575-.636m2.18-4.142l-.895 1.2a.5.5 0 0 1-.7.1l-1.19-.903M2.536 8.13v1.5m17.038 12.74L16.98 22a.5.5 0 0 1-.423-.566l.369-2.6m5.042.155l-1.951.237a.5.5 0 0 1-.554-.436l-.236-1.957m4.423-1.644l-1.575.636a.5.5 0 0 1-.648-.278l-.634-1.58m3.457-2.523l-1.192.9a.5.5 0 0 1-.7-.1l-.895-1.2m1.501-1.414v-1.5"></svg:path></svg:g>`,
})
export class BubblesPluginGamerOrLearnerSolidIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
