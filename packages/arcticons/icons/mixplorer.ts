import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMixplorerIcon],svg[arcticons-mixplorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.38 12.26l7.83 6l7.84-6v16.67H4.38zm18.53 8.1h4.28v8.57h-4.28Zm7 2.17h13.32l-3.65 6.4l3.8 6.77H29.74l3.79-6.77l-3.64-6.4Z"></svg:path>`,
})
export class ArcticonsMixplorerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
