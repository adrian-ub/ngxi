import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsShuffleSharpIcon],svg[famicons-shuffle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h128l60-92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 160h128l128 192h96m0-192h-96l-32 48"></svg:path>`,
})
export class FamiconsShuffleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
