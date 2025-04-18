import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsViewNoneIcon],svg[radix-icons-view-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.587L1.852 13H13.5a.5.5 0 0 0 .5-.5zM.763 13.807l.062.073l.03-.026c.195.094.414.146.645.146h12a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-.763-1.307l-.062-.073l-.03.025A1.5 1.5 0 0 0 13.5 1h-12A1.5 1.5 0 0 0 0 2.5v10c0 .56.307 1.05.763 1.307M1 12.413L13.148 2H1.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsViewNoneIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
