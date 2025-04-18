import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParallelIcon],svg[arcticons-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.41 5.756l-17.352 4.648a7.5 7.5 0 0 0-5.302 9.186l4.648 17.352a7.5 7.5 0 0 0 9.186 5.302l17.352-4.648a7.5 7.5 0 0 0 5.302-9.186l-4.648-17.352a7.5 7.5 0 0 0-9.186-5.302m2.368 11.61l-3.555 13.268m-6.445-13.268l-3.555 13.268"></svg:path>`,
})
export class ArcticonsParallelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
