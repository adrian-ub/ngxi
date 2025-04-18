import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSlabCircleIcon],svg[mdi-information-slab-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10M11 7h2v2h-2zm3 10h-4v-2h1v-2h-1v-2h3v4h1z"></svg:path>`,
})
export class MdiInformationSlabCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
