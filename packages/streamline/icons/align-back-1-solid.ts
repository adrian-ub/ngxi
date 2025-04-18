import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignBack1SolidIcon],svg[streamline-align-back-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h8A1.5 1.5 0 0 0 11 9.5v-8A1.5 1.5 0 0 0 9.5 0zM14 4.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 14 11.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignBack1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
