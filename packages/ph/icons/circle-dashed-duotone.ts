import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedDuotoneIcon],svg[ph-circle-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88.1 88.1 0 0 0-44 0A8 8 0 0 1 96.26 37M53.79 55.14a104 104 0 0 0-26 45a8 8 0 1 0 15.42 4.26a87.9 87.9 0 0 1 22-38.08a8 8 0 0 0-11.42-11.18m-10.58 96.41a8 8 0 1 0-15.42 4.28a104 104 0 0 0 26 45a8 8 0 1 0 11.41-11.21a88.14 88.14 0 0 1-21.99-38.07M150 213.22a88 88 0 0 1-44 0a8 8 0 1 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49M222.65 146a8 8 0 0 0-9.85 5.57a87.9 87.9 0 0 1-22 38.09a8 8 0 1 0 11.42 11.21a104.05 104.05 0 0 0 26-45a8 8 0 0 0-5.57-9.87m-9.86-41.54a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.21a88.14 88.14 0 0 1 21.99 38.06Z"></svg:path></svg:g>`,
})
export class PhCircleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
