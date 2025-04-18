import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHueEssentialsIcon],svg[arcticons-hue-essentials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4c5.86 0 12.46.98 12.46 4.95c0 4.898-6.806 17.839-6.806 26.913c0 1.598-1.031 1.753-2.165 1.753H20.51c-1.135 0-2.165-.155-2.165-1.753c0-9.074-6.806-22.015-6.806-26.913C11.54 4.98 18.14 4 24 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.714 16.033c-.822 2.39-6.985 2.145-10.714 2.145s-9.891.246-10.714-2.145m14.411 21.578v2.694a1.84 1.84 0 0 1-1.839 1.839h-.02v.017A1.84 1.84 0 0 1 24 44h0a1.84 1.84 0 0 1-1.839-1.839v-.017h-.02a1.84 1.84 0 0 1-1.838-1.839v-2.694"></svg:path>`,
})
export class ArcticonsHueEssentialsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
