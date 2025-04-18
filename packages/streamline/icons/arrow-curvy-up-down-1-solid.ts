import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown1SolidIcon],svg[streamline-arrow-curvy-up-down-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.058.227a.996.996 0 0 1 1.248-.016a1 1 0 0 1 .093.082L13.707 2.6A1 1 0 0 1 13 4.308h-1.308v6.846a2.847 2.847 0 0 1-5.692 0V2.846a.846.846 0 0 0-1.692 0V13a1 1 0 0 1-1.707.707L.293 11.4A1 1 0 0 1 1 9.692h1.308V2.846a2.846 2.846 0 0 1 5.692 0v8.308a.846.846 0 1 0 1.692 0V1a1 1 0 0 1 .366-.773" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCurvyUpDown1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
