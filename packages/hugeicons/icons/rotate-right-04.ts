import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight04Icon],svg[hugeicons-rotate-right-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.852 11.92a1.33 1.33 0 0 1 1.794.495c.367.626.16 1.422-.463 1.776l-1.505.854m.174-3.124l1.505-.855c.623-.354.83-1.15.463-1.776a1.33 1.33 0 0 0-1.794-.494l-1.128.642m.954 2.483l-4.137 2.35m3.963.774a1.33 1.33 0 0 1 1.794.494c.367.627.16 1.422-.464 1.776l-4.638 2.636c-1.635.929-2.453 1.393-3.25 1.512c-.463.07-1.17-.04-1.697-.149a1.9 1.9 0 0 0-1.333.188L8.214 22m10.464-6.955l-3.385 1.924m2.605-7.531c.623-.354.83-1.15.463-1.776a1.33 1.33 0 0 0-1.794-.494l-6.365 3.617l.504-1.92c.221-.843-.347-1.702-1.218-1.84a1.45 1.45 0 0 0-1.573.861l-1.863 4.689c-.356.897-1.21 1.76-2.05 2.237m13.896-5.374l-3.761 2.137m.5-6.609c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C3.582 4.56 3.308 5.42 2.999 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
