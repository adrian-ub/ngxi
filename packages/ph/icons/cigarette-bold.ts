import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCigaretteBoldIcon],svg[ph-cigarette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 124H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20M36 148h40v24H36Zm184 24H100v-24h120ZM201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43m-48 0c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 168.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43"></svg:path>`,
})
export class PhCigaretteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
