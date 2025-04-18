import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBookmeIcon],svg[arcticons-bookme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="17.061" cy="18.766" rx="5.963" ry="5.072" transform="rotate(-40.563 17.062 18.766)"></svg:ellipse><svg:ellipse cx="31.39" cy="18.765" rx="5.963" ry="5.072" transform="rotate(-40.563 31.39 18.765)"></svg:ellipse><svg:path d="M19.248 33.972s7.812 1.875 14.425-5.78"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsBookmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
