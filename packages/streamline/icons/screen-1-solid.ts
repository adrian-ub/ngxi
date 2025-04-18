import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScreen1SolidIcon],svg[streamline-screen-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9V2.5h10V9zM1.457.5C.652.5 0 1.152 0 1.957v7.586C0 10.348.652 11 1.457 11h4.026l-.535 1.495H4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-.948L8.517 11h4.026C13.348 11 14 10.348 14 9.543V1.957C14 1.152 13.348.5 12.543.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScreen1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
