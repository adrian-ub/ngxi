import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashFillIcon],svg[ph-gps-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136h-24.37a87.2 87.2 0 0 1-10.13 33.61a4 4 0 0 1-6.5.81L92.51 53.28a4 4 0 0 1 1.4-6.38A87 87 0 0 1 120 40.37V16a8 8 0 0 1 8.53-8a8.17 8.17 0 0 1 7.47 8.27v24.1A88.13 88.13 0 0 1 215.63 120h24.1a8.17 8.17 0 0 1 8.25 7.47A8 8 0 0 1 240 136M53.92 34.62a8 8 0 1 0-11.84 10.76l21.09 23.2A87.63 87.63 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37a87.5 87.5 0 0 0 45-17.43l21.08 23.18a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhGpsSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
