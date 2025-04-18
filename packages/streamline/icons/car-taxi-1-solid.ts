import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCarTaxi1SolidIcon],svg[streamline-car-taxi-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.499 13.252a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002"></svg:path><svg:path fill-rule="evenodd" d="M7 1.25a.75.75 0 0 0-.75.75v1.5H4.782a1.5 1.5 0 0 0-1.486 1.02v.003L2.638 6.5H1.5A1.5 1.5 0 0 0 0 8v2a1.5 1.5 0 0 0 1.02 1.421a2.502 2.502 0 0 1 4.968.079H8.01a2.501 2.501 0 0 1 4.968-.078A1.5 1.5 0 0 0 14 10V8a1.5 1.5 0 0 0-1.5-1.5h-1.632l-.61-1.968l-.004-.011A1.5 1.5 0 0 0 8.768 3.5H7.75V2A.75.75 0 0 0 7 1.25" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class StreamlineCarTaxi1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
