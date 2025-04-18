import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsWineOutlineIcon],svg[famicons-wine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96ZM256 272v160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 432H160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M112 160h288"></svg:path>`,
})
export class FamiconsWineOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
