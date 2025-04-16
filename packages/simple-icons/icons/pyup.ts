import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPyupIcon],svg[simple-icons-pyup-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.608 6v12l3.984 2.3v-12L12 4.6l6.408 3.7v7.4L12 19.4l-2.95-1.705v4.602L12 24l10.392-6V6zm0 8.593l-2.95 1.703v3.408L12 15.407l2.95-1.703v-3.408z"></svg:path>`,
})
export class SimpleIconsPyupIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
