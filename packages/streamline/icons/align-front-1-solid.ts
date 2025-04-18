import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignFront1SolidIcon],svg[streamline-align-front-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 0A2.25 2.25 0 0 0 0 2.25v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 0 0-1.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v8A1.5 1.5 0 0 0 4.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignFront1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
