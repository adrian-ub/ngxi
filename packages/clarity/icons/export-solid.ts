import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityExportSolidIcon],svg[clarity-export-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22a1 1 0 0 1 1-1h8V6a2 2 0 0 0-2-2H10.87L4 10.86V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7h-8a1 1 0 0 1-1-1m-5-10H6v-.32L11.69 6H12Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M29.32 16.35a1 1 0 0 0-1.41 1.41L31.16 21H26v2h5.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L35 22Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityExportSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
