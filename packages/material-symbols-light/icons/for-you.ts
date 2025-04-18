import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightForYouIcon],svg[material-symbols-light-for-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.385q1.833 0 3.744-.317t3.487-.876V19.5q-1.423.598-3.42.972q-1.995.374-3.811.374t-3.812-.374t-3.419-.972v-8.308q1.575.56 3.487.876t3.744.317m0-9.231q1.333 0 2.282.949t.949 2.282t-.95 2.281q-.948.95-2.281.95t-2.282-.95t-.949-2.281t.95-2.282q.948-.95 2.281-.95"></svg:path>`,
})
export class MaterialSymbolsLightForYouIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
