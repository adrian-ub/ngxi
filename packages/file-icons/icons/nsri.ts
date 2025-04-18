import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNsriIcon],svg[file-icons-nsri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m290.396 166.147l33.351 33.26l-146.53 146.51l-75.507-75.635l33.369-33.35l42.266 42.267zm67.558 89.767c0-111.388-121.412-181.383-218.016-125.69s-96.605 195.685 0 251.378s218.016-14.301 218.016-125.688M212.666 512C119.536 466.825 4.59 395.31 0 304.636V79.296L212.666 0l212.772 79.297V303.34c-.624 77.913-86.1 145.735-212.772 208.659"></svg:path>`,
})
export class FileIconsNsriIcon {
  readonly viewBox = input("0 0 426 512")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
