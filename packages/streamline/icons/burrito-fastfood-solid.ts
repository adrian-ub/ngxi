import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBurritoFastfoodSolidIcon],svg[streamline-burrito-fastfood-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.323 1.99a2 2 0 0 0-.872-.512A2 2 0 0 0 10.589.02h-.002a2 2 0 0 0-1.273.407a2 2 0 0 0-2.002.5a2 2 0 0 0 0 2.829l2.86 2.859a2 2 0 0 0 2.828 0a2 2 0 0 0 .5-2.002a2 2 0 0 0 .408-1.273a2 2 0 0 0-.585-1.35M10.91 5.94l-.032-.031l-2.86-2.86l-.029-.03a2.06 2.06 0 0 1 1.452-.784a2.05 2.05 0 0 1 1.644.623c.456.438.652 1.036.604 1.634a2.04 2.04 0 0 1-.779 1.448M.903 9.087L4.73 5.261l1.85 5.037a.5.5 0 0 1-.642.642zm-.52 1.934A1 1 0 0 1 .187 9.89l5.406 1.99q.301.107.588.093l-1.715 1.716a1 1 0 0 1-1.415 0L.384 11.02Zm9.553-2.805l-2.324 2.325a1.5 1.5 0 0 0-.094-.588l-2.01-5.47l.348-.348z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBurritoFastfoodSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
