import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashDuotoneIcon],svg[ph-cigarette-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 136v48H32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44a8 8 0 1 0 6.5-14.62a7.8 7.8 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92c8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44a8 8 0 1 0-6.5 14.62a7.8 7.8 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91c-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM32 176h48v-32H32Zm128.82 0l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhCigaretteSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
