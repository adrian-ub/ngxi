import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUndertaleIcon],svg[arcticons-undertale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.437 9.853h-2.18V7.677h-2.18V5.5H30.54v2.177h-2.18v2.176h-2.18v4.353h-4.36V9.853h-2.18V7.677h-2.179V5.5h-6.539v2.177h-2.18v2.176H6.564v19.588h4.36v4.353h4.358v4.353h4.36V42.5h8.718v-4.353h4.36v-4.353h4.359v-4.353h4.359z"></svg:path>`,
})
export class ArcticonsUndertaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
