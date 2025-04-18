import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryThinIcon],svg[ph-smiley-angry-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64-4A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92m-46.22-43.33L128 115.19L82.22 84.67a4 4 0 1 0-4.44 6.66l48 32a4 4 0 0 0 4.44 0l48-32a4 4 0 1 0-4.44-6.66m-19.57 96c-7.82-5.2-15.27-8.67-26.21-8.67s-18.39 3.47-26.21 8.67a4 4 0 1 0 4.42 6.66C113.2 182.69 119 180 128 180s14.8 2.69 21.79 7.33a4 4 0 1 0 4.42-6.66"></svg:path>`,
})
export class PhSmileyAngryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
