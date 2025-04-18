import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandPointingRight04Icon],svg[hugeicons-hand-pointing-right-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.485 10.755h3.004m0 0h3.506c.831 0 1.505-.672 1.505-1.502c0-.829-.674-1.501-1.505-1.501h-5.464m1.958 3.003l-.027 1.054a2 2 0 0 1-.978 1.668m-.953-5.725H9.968m4.563 0l-2.76-2.594c-1.867-1.572-3.229-.746-3.985-.166L5.348 6.607C3.281 7.832 2.5 9.25 2.5 10.442v4.88c0 2.266 2.382 4.38 4.566 4.38l5.2.047a2 2 0 0 0 2.004-1.732l.19-1.54m-1.005-2.718h1.004c.375 0 .725-.103 1.025-.282m0 0l-.054 1.336a2 2 0 0 1-2.003 1.95h-1.004" color="currentColor"></svg:path>`,
})
export class HugeiconsHandPointingRight04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
