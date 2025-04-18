import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintbrush1SolidIcon],svg[streamline-paintbrush-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.707 5.292A1 1 0 0 0 12 4.999h-2a1 1 0 0 1-1-1v-2a2 2 0 1 0-4 0v2a1 1 0 0 1-1 1H2a1 1 0 0 0-1 1v2a.5.5 0 0 0 .5.5h11A.5.5 0 0 0 13 8V6a1 1 0 0 0-.293-.707ZM1.01 12.934L1.5 9.5h11l.49 3.434A.934.934 0 0 1 12.067 14H9.25v-2a.75.75 0 0 0-1.5 0v2H1.934a.934.934 0 0 1-.925-1.066Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaintbrush1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
