import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBed16FilledIcon],svg[fluent-bed-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6h1v-.5A.5.5 0 0 1 9 5h1.5a.5.5 0 0 1 .5.5V6h2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h2v-.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5zm-4 1A2.5 2.5 0 0 0 1 9.5v4a.5.5 0 0 0 1 0V11h12v2.5a.5.5 0 0 0 1 0v-4A2.5 2.5 0 0 0 12.5 7z"></svg:path>`,
})
export class FluentBed16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
