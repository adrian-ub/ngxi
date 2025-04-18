import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsKeyIcon],svg[humbleicons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 16l5.18-5.652C10.033 9.875 10 9.523 10 9a5 5 0 1 1 5 5c-.523 0-.868-.01-1.342-.158L12 15.5h-2v2H8v2H5z"></svg:path></svg:g>`,
})
export class HumbleiconsKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
