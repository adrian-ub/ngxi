import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTildeBoldIcon],svg[ph-tilde-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.35 133.1c-15.22 18.93-30.43 29-46.5 30.65a47 47 0 0 1-4.85.25c-20.81 0-38.16-14.13-53.59-26.7c-14.24-11.6-27.68-22.54-40.75-21.18c-9.26 1-19.46 8.32-30.32 21.82a12 12 0 0 1-18.7-15C45.87 104 61.08 94 77.15 92.25c23-2.42 41.82 12.92 58.43 26.45c14.24 11.6 27.68 22.54 40.75 21.18c9.26-1 19.46-8.32 30.32-21.82a12 12 0 1 1 18.7 15Z"></svg:path>`,
})
export class PhTildeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
