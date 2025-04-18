import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox1SolidIcon],svg[streamline-shipping-box-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-3v4.508c0 .13.055.255.154.348A.54.54 0 0 0 6.026 5h1.948c.14 0 .273-.052.372-.144a.48.48 0 0 0 .154-.348zM4.25 0H1.5A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0H9.75v4.508c0 .49-.208.94-.55 1.26c-.338.317-.78.482-1.226.482H6.026c-.446 0-.888-.165-1.226-.482a1.73 1.73 0 0 1-.55-1.26zm4.51 11.1c0-.346.28-.626.624-.626h2.014a.625.625 0 0 1 0 1.25H9.384a.625.625 0 0 1-.625-.625Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShippingBox1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
