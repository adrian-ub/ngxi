import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFoxsMmmIcon],svg[arcticons-foxs-mmm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.165 22.494v-6.788a2.71 2.71 0 0 0-2.715-2.716h-6.753V9.252h0A4.75 4.75 0 0 0 20.946 4.5h0a4.75 4.75 0 0 0-4.752 4.752v3.738H9.37a2.71 2.71 0 0 0-2.716 2.715v6.788h1.731a4.752 4.752 0 0 1 0 9.503h-1.73v6.788A2.71 2.71 0 0 0 9.37 41.5h6.823v-2.479h0a4.75 4.75 0 0 1 4.752-4.751h0a4.75 4.75 0 0 1 4.751 4.752h0V41.5h6.753a2.71 2.71 0 0 0 2.715-2.715v-6.788h3.428a4.752 4.752 0 0 0 0-9.503Z"></svg:path>`,
})
export class ArcticonsFoxsMmmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
