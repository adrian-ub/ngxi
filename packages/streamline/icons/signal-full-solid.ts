import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalFullSolidIcon],svg[streamline-signal-full-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 1h-2.662a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h2.663a.5.5 0 0 0 .5-.5v-12A.5.5 0 0 0 13 1M3.163 8H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.662a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5ZM5.42 5h2.663a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H5.419a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalFullSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
