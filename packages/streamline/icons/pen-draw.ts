import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePenDrawIcon],svg[streamline-pen-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.64 7.86c.785-1.097 3.164-4.214 5.947-5.967c2.093-1.318 4.07.422 2.537 2.174c-1.499 1.714-3.51 4.073-4.368 5.244c-.89 1.214.633 2.682 2.157 1.285c1.019-.934 2.08-2.008 3.158-2.802c1.456-1.071 2.705-.125 2.07 1.082c-.46.873-.793 1.258-1.177 1.992c-.383.735.023 1.615.604 1.691c.72.094 1.176-.423 1.791-1.228"></svg:path>`,
})
export class StreamlinePenDrawIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
