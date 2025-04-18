import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDragSolidIcon],svg[iconoir-drag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3.25 4A.75.75 0 0 1 4 3.25h4a.75.75 0 0 1 .53 1.28L7.06 6l5.47 5.47a.75.75 0 1 1-1.06 1.06L6 7.06L4.53 8.53A.75.75 0 0 1 3.25 8z"></svg:path><svg:path d="M3.25 20c0 .414.336.75.75.75h4a.75.75 0 0 0 .53-1.28L7.06 18l5.47-5.47a.75.75 0 1 0-1.06-1.06L6 16.94l-1.47-1.47a.75.75 0 0 0-1.28.53z"></svg:path><svg:path d="M20.75 4a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.53 1.28L16.94 6l-5.47 5.47a.75.75 0 1 0 1.06 1.06L18 7.06l1.47 1.47A.75.75 0 0 0 20.75 8z"></svg:path><svg:path d="M20.75 20a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.53-1.28L16.94 18l-5.47-5.47a.75.75 0 1 1 1.06-1.06L18 16.94l1.47-1.47a.75.75 0 0 1 1.28.53z"></svg:path></svg:g>`,
})
export class IconoirDragSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
