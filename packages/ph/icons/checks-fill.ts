import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChecksFillIcon],svg[ph-checks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M72 168a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L72 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32l-64 64A8 8 0 0 1 72 168m141.66-66.34l-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L144 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhChecksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
