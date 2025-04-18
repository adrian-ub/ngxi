import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTakeOffSolidIcon],svg[streamline-take-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.59 1.934a3.49 3.49 0 0 0-2.921.276l-4.95 2.465l-.82-1.298a.71.71 0 0 0-.796-.275h-.002l-1.369.44a.69.69 0 0 0-.455.847l.003.008l1.16 3.6l.002.006a1.11 1.11 0 0 0 1.427.673L5.987 7.67l-.234 1.14a.73.73 0 0 0 .992.826l1.527-.496a.7.7 0 0 0 .477-.492l.602-2.06l.214-.07l3.389-1.099a1.13 1.13 0 0 0 .738-1.426a3.49 3.49 0 0 0-2.103-2.058Zm1.4 10.054a1 1 0 1 1 0 2H1.006a1 1 0 1 1 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTakeOffSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
