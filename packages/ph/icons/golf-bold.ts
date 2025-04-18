import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGolfBoldIcon],svg[ph-golf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 100a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-48 16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m88-20a92 92 0 1 1-92-92a92.1 92.1 0 0 1 92 92m-24 0a68 68 0 1 0-68 68a68.07 68.07 0 0 0 68-68m-32 101.86a108.6 108.6 0 0 1-72 0a12 12 0 0 0-8 22.63a131.8 131.8 0 0 0 32 7V244a12 12 0 0 0 24 0v-16.54a131.8 131.8 0 0 0 32-7a12 12 0 0 0-8-22.63Z"></svg:path>`,
})
export class PhGolfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
