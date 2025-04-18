import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextStrikethroughIcon],svg[proicons-text-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.059 8.113s-.71-3.363-5.861-3.363c-1.923 0-4.42 1.601-4.42 3.838c0 .493.087.92.259 1.292q.194.418.526.75m-.526 6.365S8.382 20 12.364 20c2.217 0 4.859-1.078 4.859-3.544c0-1.571-.918-2.63-2.408-3.331m-10.065 0h10.065m4.435 0h-4.435"></svg:path>`,
})
export class ProiconsTextStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
