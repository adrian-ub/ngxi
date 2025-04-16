import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBabylondotjsIcon],svg[simple-icons-babylondotjs-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.607 6.002v12L12 24l10.393-6V6L19.14 4.123L16.01 5.93l3.252 1.879v8.384L12 20.387l-7.264-4.194V7.807l10.393-6zm0 8.244l-3.254 1.879v3.754h.002v.004L12 15.758l3.252-1.877v-3.76z"></svg:path>`,
})
export class SimpleIconsBabylondotjsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
