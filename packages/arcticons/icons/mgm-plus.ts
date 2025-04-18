import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMgmPlusIcon],svg[arcticons-mgm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.6 22.004v4m-2-2h4m-15.07 3.99v-8l4 8l4-7.98v7.99m-10.41-5.35a2.65 2.65 0 1 0-5.3 0v2.7a2.65 2.65 0 0 0 5.3.003v-.003h-2.65M7.4 27.994v-8l4 8l4-7.98v7.99"></svg:path>`,
})
export class ArcticonsMgmPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
