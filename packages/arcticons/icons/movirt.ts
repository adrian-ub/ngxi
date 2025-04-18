import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovirtIcon],svg[arcticons-movirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.763 20.078v8.057c0 .806.535 1.343 1.337 1.343h.4m-3.207-7.251h2.94m-7.937 2.685a2.687 2.687 0 0 1 2.673-2.685h0m-2.673 0v7.251"></svg:path><svg:circle cx="26.735" cy="19.004" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.735 22.227v7.251m-2.638-10.743l-3.475 10.743l-3.475-10.743m-4.973 10.743A2.687 2.687 0 0 1 9.5 26.792v-1.745a2.687 2.687 0 0 1 2.673-2.686h0a2.687 2.687 0 0 1 2.673 2.686v1.745a2.687 2.687 0 0 1-2.673 2.686"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMovirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
