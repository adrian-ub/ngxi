import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWatchIcon],svg[carbon-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8h-1V2h-2v6h-6V2h-2v6h-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v6h2v-6h6v6h2v-6h1a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M10 22V10h12v12zm15-8h2v4h-2z"></svg:path>`,
})
export class CarbonWatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
