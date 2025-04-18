import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAerospikeIconIcon],svg[logos-aerospike-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C4373A" d="M256 0v27.43l-60.039 26.468v123.077L256 203.728v26.18L27.017 126.865L0 115.372l27.017-12.389zm-83.138 63.932l-115.943 51.36l115.943 51.647z"></svg:path>`,
})
export class LogosAerospikeIconIcon {
  readonly viewBox = input("0 0 256 230")
  readonly width = input("1.12em")
  readonly height = input("1em")
}
