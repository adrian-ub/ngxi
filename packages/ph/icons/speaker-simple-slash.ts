import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleSlashIcon],svg[ph-speaker-simple-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 152v-48a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m40-72a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-10.08 130.62a8 8 0 1 1-11.84 10.76L168 175.09V224a8 8 0 0 1-12.91 6.31L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L50.08 45.38a8 8 0 0 1 11.84-10.76ZM152 157.49L96.1 96H40v64h48a7.94 7.94 0 0 1 4.91 1.69L152 207.64Zm-26.94-88.18l26.94-21v58.47a8 8 0 0 0 16 0V32a8 8 0 0 0-12.91-6.31l-39.85 31a8 8 0 0 0 9.82 12.63Z"></svg:path>`,
})
export class PhSpeakerSimpleSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
