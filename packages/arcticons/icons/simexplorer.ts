import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimexplorerIcon],svg[arcticons-simexplorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.87 28.74h-4.73v2.68h-4.69v2.68h-9.38v-5.36h4.69v-2.68h4.69v-2.68h9.42ZM41.68 13H24.77c-2-.1-5.93-4.23-8.19-4.23h-9.9A2.18 2.18 0 0 0 4.5 11h0v7.29h39v-3.42A1.83 1.83 0 0 0 41.68 13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 18.28h-39V37a2.18 2.18 0 0 0 2.17 2.2h34.65A2.18 2.18 0 0 0 43.5 37h0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.45 26.06v2.68h4.69m-9.38 0v2.68h4.71"></svg:path>`,
})
export class ArcticonsSimexplorerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
