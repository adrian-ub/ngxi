import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPentagonFilledIcon],svg[tabler-pentagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.205 2.6l-6.96 5.238A3 3 0 0 0 2.2 11.176l2.896 8.765A3 3 0 0 0 7.946 22h8.12a3 3 0 0 0 2.841-2.037l2.973-8.764a3 3 0 0 0-1.05-3.37l-7.033-5.237l-.091-.061l-.018-.01l-.106-.07a3 3 0 0 0-3.377.148z"></svg:path>`,
})
export class TablerPentagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
