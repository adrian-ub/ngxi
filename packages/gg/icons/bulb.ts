import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBulbIcon],svg[gg-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 9a8 8 0 0 0 4 6.93V16a4 4 0 1 0 8 0v-.07A8 8 0 1 0 4 9m12 4.472a6 6 0 1 0-8 0h2V16a2 2 0 1 0 4 0v-2.53z" clip-rule="evenodd"></svg:path><svg:path d="M10 21.006V21c.588.34 1.271.535 2 .535s1.412-.195 2-.535v.006a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class GgBulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
