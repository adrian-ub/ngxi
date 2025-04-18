import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTelevisionPlayIcon],svg[pepicons-pencil-television-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.25 9v5a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7.5a2 2 0 0 0-2 2m-1 0v5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-7.5a3 3 0 0 0-3 3"></svg:path><svg:path d="M11.5 11.5L9 13v-3z"></svg:path><svg:path d="M12 11.5a.5.5 0 0 1-.243.429l-2.5 1.5A.5.5 0 0 1 8.5 13v-3a.5.5 0 0 1 .757-.429l2.5 1.5A.5.5 0 0 1 12 11.5m-2.5-.617v1.234l1.028-.617zm3.062-7.773a.5.5 0 0 1 .078.702l-2 2.5a.5.5 0 1 1-.78-.624l2-2.5a.5.5 0 0 1 .702-.078"></svg:path><svg:path d="M6.938 3.11a.5.5 0 0 1 .702.078l2 2.5a.5.5 0 1 1-.78.624l-2-2.5a.5.5 0 0 1 .078-.702"></svg:path></svg:g>`,
})
export class PepiconsPencilTelevisionPlayIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
