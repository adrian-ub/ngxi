import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixVariableIcon],svg[ix-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M81.46 149.119c24.057 75.315 127.642 76.914 154.622.426c38.814-109.923 188.714-116.064 231.637-5.906l1.614 4.179l-37.853 16.078l-1.635-4.201c-28.226-72.414-128.91-70.453-155.399 4.585c-39.631 112.333-194.846 113.889-231.78-1.685zM42.667 384h192V256h234.666v42.667H276.674l.659 128H42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxVariableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
