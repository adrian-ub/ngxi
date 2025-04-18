import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPeopleManGraduateOutlineIcon],svg[bubbles-people-man-graduate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7.899 19.111l4.063 4.374l4.081-4.393M11.829 4.455q.171.03.342 0l9.913-1.724a.25.25 0 0 0 0-.492L12.171.515a1 1 0 0 0-.342 0L1.916 2.239a.25.25 0 0 0 0 .492zM2 8.485a10.9 10.9 0 0 0-1.482 4.5a.47.47 0 0 0 .468.5h2a.5.5 0 0 0 .5-.538A10.95 10.95 0 0 0 2 8.485m0-5.739v5.74m4 1.999V3.442m12 0v7.043m-12-3a18.98 18.98 0 0 0 12 0m-7.52 7.4a2.175 2.175 0 0 0 3 0m-2.48-3.9a1.09 1.09 0 0 0-1-.5a1.09 1.09 0 0 0-1 .5m6 0a1.09 1.09 0 0 0-1-.5a1.09 1.09 0 0 0-1 .5"></svg:path><svg:path d="M5.98 10.485c-.874.437-.6 2.4.479 2.89a1 1 0 0 1 .574.745c.443 2.644 3.555 4.365 4.947 4.365s4.5-1.72 4.947-4.365a1 1 0 0 1 .574-.746c1.081-.49 1.352-2.452.479-2.889m-1.937 8.607L21 20.737l.018.006a4 4 0 0 1 2.482 2.742M7.9 19.111L3 20.737l-.018.006A4 4 0 0 0 .5 23.485"></svg:path></svg:g>`,
})
export class BubblesPeopleManGraduateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
