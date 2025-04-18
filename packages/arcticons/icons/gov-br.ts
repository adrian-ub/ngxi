import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGovBrIcon],svg[arcticons-gov-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.664 21.062l-2.218 5.876l-2.217-5.876m-8.294 0v6.652a2.217 2.217 0 0 1-2.218 2.217h0a2.2 2.2 0 0 1-1.568-.65"></svg:path><svg:rect width="4.435" height="5.876" x="9.5" y="21.062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.217" ry="2.217" transform="rotate(180 11.717 24)"></svg:rect><svg:rect width="4.435" height="5.876" x="16.085" y="21.062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.217" ry="2.217"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.283 23.28c0-1.225.992-2.218 2.217-2.218h0m-2.217 0v5.876m-6.58-3.658c0-1.225.993-2.218 2.218-2.218h0c1.224 0 2.217.993 2.217 2.217v1.442a2.217 2.217 0 0 1-2.217 2.217h0a2.217 2.217 0 0 1-2.218-2.217m0 2.217v-8.869"></svg:path><svg:circle cx="27.265" cy="26.724" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsGovBrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
