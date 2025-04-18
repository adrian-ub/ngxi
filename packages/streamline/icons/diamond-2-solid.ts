import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiamond2SolidIcon],svg[streamline-diamond-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.408 1.04H7.62l1.717 3.69H4.684zM3.304 4.73l1.724-3.69H3.346a1.57 1.57 0 0 0-1.244.67L.285 4.228l-.003.004a1.6 1.6 0 0 0-.234.5h3.256ZM.254 5.98h3.024l1.921 6.161L.365 6.13a2 2 0 0 1-.111-.148Zm4.333 0h4.847l-2.33 7.503a2 2 0 0 1-.176.002l-2.34-7.504Zm6.156 0l-1.896 6.103l4.788-5.954a2 2 0 0 0 .111-.148h-3.003Zm3.208-1.25a1.6 1.6 0 0 0-.233-.499l-.003-.004l-1.817-2.516a1.57 1.57 0 0 0-1.244-.67V1.04H9l1.716 3.69z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDiamond2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
