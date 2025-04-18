import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWheelchairIcon],svg[hugeicons-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0m6 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M7.008 16h-.009"></svg:path><svg:path d="m6 11l-.628-5.023c-.145-1.159-.217-1.738-.522-2.155a2 2 0 0 0-.647-.572C3.751 3 3.167 3 2 3m4 4h5.5c2.357 0 3.536 0 4.268.732S16.5 9.643 16.5 12v6"></svg:path><svg:path d="M12 14h4.024c.885 0 1.328 0 1.713.189q.14.068.267.158c.356.25.601.659 1.092 1.474c.393.653.59.98.884 1.107q.105.044.215.063c.312.052.629-.124 1.263-.475l.542-.3"></svg:path></svg:g>`,
})
export class HugeiconsWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
