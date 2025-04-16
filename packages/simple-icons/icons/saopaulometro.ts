import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSaopaulometroIcon],svg[simple-icons-saopaulometro-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.366 6.543l5.092 5.456l-5.092 5.456zM24 0v24H0V0zm-5.542 11.999l1.747-1.872L11.976 1.9l-8.227 8.228l1.747 1.871l-1.747 1.871l8.227 8.229l8.228-8.229zm-7.87 5.455V6.543l-5.092 5.456z"></svg:path>`,
})
export class SimpleIconsSaopaulometroIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
