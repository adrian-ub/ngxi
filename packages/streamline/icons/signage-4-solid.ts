import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage4SolidIcon],svg[streamline-signage-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.615.406v.786h-.002a.625.625 0 1 0 0 1.25h1.253a.625.625 0 0 0 0-1.25h-.001V.406h2.51v.786h-.002a.625.625 0 1 0 0 1.25h1.254a.625.625 0 1 0 0-1.25h-.002V.406h2.51v.786h-.002a.625.625 0 0 0 0 1.25h1.254a.625.625 0 1 0 0-1.25h-.002V.407h1.695a.5.5 0 0 1 .5.5v8.335a.5.5 0 0 1-.5.5h-2.184v3.5a.75.75 0 0 1-1.5 0v-3.5H4.604v3.5a.75.75 0 0 1-1.5 0v-3.5H.92a.5.5 0 0 1-.5-.5V.906a.5.5 0 0 1 .5-.5zm6.265 5.71a.625.625 0 0 0 0 1.25h2.507a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignage4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
