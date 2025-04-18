import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross1SolidIcon],svg[streamline-christian-cross-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 0a.5.5 0 0 0-.5.5V3H2a.5.5 0 0 0-.5.5v4A.5.5 0 0 0 2 8h2.5v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8H12a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 12 3H9.5V.5A.5.5 0 0 0 9 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChristianCross1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
