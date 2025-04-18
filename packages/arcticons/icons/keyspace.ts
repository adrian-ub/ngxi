import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyspaceIcon],svg[arcticons-keyspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.021 5L5.81 13.893l18.054 7.98l18.328-7.98z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.81 13.893v4.342l18.053 8.66l18.328-8.66v-4.342m-18.328 7.98v5.021"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.239 20.102l3.952 1.771l-18.328 8.78l-18.054-8.601l3.893-1.95"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.19 21.873v4.458L23.864 34.96L5.809 26.331v-4.28m18.054 8.601v4.307"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.284 28.187l3.907 1.734l-18.328 8.872l-18.028-8.846l3.857-1.76"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.19 29.921v4.36L23.864 43L5.809 34.179v-4.232m18.054 8.846V43"></svg:path>`,
})
export class ArcticonsKeyspaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
