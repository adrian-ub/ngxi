import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealth24pxIcon],svg[healthicons-ministry-of-health-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.286 8L12 2l7.714 6H21v3H3V8zm6.964 1V7.75H10v-1.5h1.25V5h1.5v1.25H14v1.5h-1.25V9z" clip-rule="evenodd"></svg:path><svg:path d="M21 17v3H3v-3h2v-4.5h2V17h2v-4.5h2V17h2v-4.5h2V17h2v-4.5h2V17z"></svg:path></svg:g>`,
})
export class HealthiconsMinistryOfHealth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
