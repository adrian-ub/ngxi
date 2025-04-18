import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPlusIcon],svg[mdi-water-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 .7.12 1.36.34 2H12c-3.31 0-6-2.69-6-6c0-4 6-10.75 6-10.75S16.31 8.1 17.62 12c-3.12.22-5.62 2.82-5.62 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiWaterPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
