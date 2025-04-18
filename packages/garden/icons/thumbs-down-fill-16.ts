import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsDownFill16Icon],svg[garden-thumbs-down-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 16a1.94 1.94 0 0 1-2-2v-4H1.5A1.5 1.5 0 0 1 0 8.5C.25 2.54 1 0 2.5 0H11a1 1 0 0 1 1 1v8.1a1 1 0 0 1-.58.95c-.47.16-1.42.82-1.42 4A1.94 1.94 0 0 1 8 16"></svg:path><svg:rect width="3" height="10" x="13" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenThumbsDownFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
