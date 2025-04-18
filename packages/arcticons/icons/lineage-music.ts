import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineageMusicIcon],svg[arcticons-lineage-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.881" cy="31.876" r="7.381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.119" cy="31.876" r="7.381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.262 31.876v-14.54a1.9 1.9 0 0 1 1.898-1.897h18.443a1.897 1.897 0 0 1 1.897 1.898v14.539"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.262 18.445v-5.907a3.795 3.795 0 0 1 3.795-3.795h14.648a3.795 3.795 0 0 1 3.795 3.795v5.907"></svg:path>`,
})
export class ArcticonsLineageMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
