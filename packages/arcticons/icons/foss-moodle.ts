import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossMoodleIcon],svg[arcticons-foss-moodle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 18.874L23.936 7.002L3.5 18.8l20.564 11.873z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.065 23.272v10.235l12.975 7.491l12.895-7.444V23.272m7.565-4.398v11.233"></svg:path>`,
})
export class ArcticonsFossMoodleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
