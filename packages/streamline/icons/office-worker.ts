import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOfficeWorkerIcon],svg[streamline-office-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.03 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M5.716 10.524L5.344 13.5H2.727l-.5-4H.529V8a3.5 3.5 0 0 1 6.942-.634M7.295 9.97c0-.487.395-.882.882-.882h4.412c.487 0 .882.395.882.883v2.647a.88.88 0 0 1-.882.882H8.177a.88.88 0 0 1-.882-.882zm1.881-.882v-.65a1 1 0 0 1 1-1h.412a1 1 0 0 1 1 1v.65"></svg:path></svg:g>`,
})
export class StreamlineOfficeWorkerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
