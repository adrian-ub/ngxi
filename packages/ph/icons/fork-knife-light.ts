import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeLightIcon],svg[ph-fork-knife-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74 88V40a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0m140-48v184a6 6 0 0 1-12 0v-50h-50a6 6 0 0 1-6-6c0-4.41.68-108.25 59.64-133.51A6 6 0 0 1 214 40m-12 10c-36.79 24.29-42.82 91.48-43.81 112H202Zm-84.08-11a6 6 0 1 0-11.84 2L114 88.48a34 34 0 0 1-68 0L53.92 41a6 6 0 0 0-11.84-2l-8 48a6.6 6.6 0 0 0-.08 1a46.06 46.06 0 0 0 40 45.6V224a6 6 0 0 0 12 0v-90.4A46.06 46.06 0 0 0 126 88a6.6 6.6 0 0 0-.08-1Z"></svg:path>`,
})
export class PhForkKnifeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
