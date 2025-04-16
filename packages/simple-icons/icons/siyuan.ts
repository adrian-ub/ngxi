import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSiyuanIcon],svg[simple-icons-siyuan-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8.455l6.818-6.819L12 6.818l5.182-5.182L24 8.455v13.909l-6.818-6.819v-2.314l5.182 5.182v-9.28L17.182 3.95v11.594L12 20.727l-5.182-5.182v-2.314L12 18.413v-9.28L6.818 3.95v11.594L0 22.364Z"></svg:path>`,
})
export class SimpleIconsSiyuanIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
