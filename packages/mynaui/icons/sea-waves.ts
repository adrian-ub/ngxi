import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSeaWavesIcon],svg[mynaui-sea-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 5.918l1.764-.887a4.97 4.97 0 0 1 4.472 0l.528.266a4.97 4.97 0 0 0 4.472 0l.528-.266a4.97 4.97 0 0 1 4.472 0L21 5.918M3 10.446l1.764-.888a4.97 4.97 0 0 1 4.472 0l.528.266a4.97 4.97 0 0 0 4.472 0l.528-.266a4.97 4.97 0 0 1 4.472 0l1.764.888M3 14.973l1.764-.888a4.97 4.97 0 0 1 4.472 0l.528.266a4.97 4.97 0 0 0 4.472 0l.528-.266a4.97 4.97 0 0 1 4.472 0l1.764.888M3 19.5l1.764-.887a4.97 4.97 0 0 1 4.472 0l.528.265a4.97 4.97 0 0 0 4.472 0l.528-.265a4.97 4.97 0 0 1 4.472 0L21 19.5"></svg:path>`,
})
export class MynauiSeaWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
