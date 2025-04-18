import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyBoldIcon],svg[ph-smiley-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.39 158c-11 19.06-29.39 30-50.39 30s-39.36-10.93-50.39-30a12 12 0 0 1 20.78-12c3.89 6.73 12.91 18 29.61 18s25.72-11.28 29.61-18a12 12 0 1 1 20.78 12M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84m-120-4a16 16 0 1 0-16-16a16 16 0 0 0 16 16m72-32a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSmileyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
