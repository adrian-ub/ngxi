import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJoystick04Icon],svg[hugeicons-joystick-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9.325 12l-.533.26l-1.524.745C5.756 13.745 5 14.115 5 14.575s.756.83 2.268 1.57l1.524.745C10.304 17.63 11.06 18 12 18s1.696-.37 3.208-1.11l1.524-.745c1.512-.74 2.268-1.11 2.268-1.57s-.756-.83-2.268-1.57l-1.524-.745l-.533-.26"></svg:path><svg:path d="M19 14.5v3.767c0 .5-.756.904-2.268 1.71l-1.524.813C13.696 21.597 12.94 22 12 22s-1.696-.403-3.208-1.21l-1.524-.812C5.756 19.17 5 18.768 5 18.267V14.5m10.5-9a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M12 9v5.5"></svg:path></svg:g>`,
})
export class HugeiconsJoystick04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
