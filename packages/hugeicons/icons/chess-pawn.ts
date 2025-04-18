import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChessPawnIcon],svg[hugeicons-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 10c0 2.667-.5 5.333-2.5 8m7.5-8c0 2.667.5 5.333 2.5 8M15.5 5.429a3.37 3.37 0 0 1-.678 2.028c-.344.46-.688.543-1.252.543h-3.14c-.564 0-.908-.084-1.252-.543A3.37 3.37 0 0 1 8.5 5.429C8.5 3.535 10.067 2 12 2s3.5 1.535 3.5 3.429M8 10h8M4.205 20.649l.02-.053C5.068 18.44 5.728 18 8.123 18h7.756c2.395 0 3.055.44 3.896 2.596l.021.053c.424 1.086.233 1.351-.974 1.351H5.18c-1.207 0-1.398-.265-.974-1.351" color="currentColor"></svg:path>`,
})
export class HugeiconsChessPawnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
