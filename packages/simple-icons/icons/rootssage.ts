import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRootssageIcon],svg[simple-icons-rootssage-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.384 4.232l1.71 5.075l-4.478-3.136L0 9.403l1.753 5.2l.01.03H7.3L2.82 17.77l1.754 5.2l.01.03h5.705L12 17.925l1.7 5.045l.01.03h5.707l1.763-5.23l-4.48-3.137h5.537L24 9.403l-4.616-3.232l-4.479 3.136l1.711-5.075L12 1zm.105 10.342l1.723-5.111h5.576l1.723 5.111l-4.51 3.16z"></svg:path>`,
})
export class SimpleIconsRootssageIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
