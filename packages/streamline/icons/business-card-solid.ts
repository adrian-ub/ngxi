import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessCardSolidIcon],svg[streamline-business-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 2zm2.774 2.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25m3.827.625c0-.345.28-.625.625-.625h2.5a.625.625 0 1 1 0 1.25h-2.5A.625.625 0 0 1 8.1 5.5Zm.625 2.375a.625.625 0 1 0 0 1.25h2.5a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessCardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
