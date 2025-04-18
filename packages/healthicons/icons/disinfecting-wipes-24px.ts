import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDisinfectingWipes24pxIcon],svg[healthicons-disinfecting-wipes-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.639 2.476a3.5 3.5 0 0 1 4.33.493L17 4l-1.786 5H16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h.912L7 2.5l2.106.702a2 2 0 0 0 1.693-.201zM10.996 9h2.095l1.6-4.48l-.136-.137a1.5 1.5 0 0 0-1.856-.211l-.84.525a4 4 0 0 1-1.95.604zM10 14h4v3h-4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsDisinfectingWipes24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
