import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCamera1SolidIcon],svg[streamline-camera-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.6 1.7a.5.5 0 0 1 .4-.2h4a.5.5 0 0 1 .4.2l1.35 1.8h1.75A1.5 1.5 0 0 1 14 5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11V5a1.5 1.5 0 0 1 1.5-1.5h1.75zm4.861 6.011a2.461 2.461 0 1 1-4.922 0a2.461 2.461 0 0 1 4.922 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCamera1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
