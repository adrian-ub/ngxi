import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLaunchpadIcon],svg[simple-icons-launchpad-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.999 18.676l-4.432-2.556l-4.783 2.764V24zM11.216 24v-5.119l-4.785-2.762l-4.43 2.557zm.779-6.475l4.789-2.765V9.236l-4.785-2.76l-4.783 2.76v5.527l4.781 2.761zM1.22 6.682v10.641l4.432-2.559V9.239L1.219 6.68zm19.615 1.121l-2.484 1.436v5.522l4.43 2.559V6.678zM2.001 5.324l4.435 2.559l4.781-2.762V.003zm15.566 2.559l4.434-2.559L12.782 0v5.121z"></svg:path>`,
})
export class SimpleIconsLaunchpadIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
