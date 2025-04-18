import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelDockleftIcon],svg[raphael-dockleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.084 7.333v16.334h24.832V7.333zm8.583 3h13.25v10.335h-13.25z"></svg:path>`,
})
export class RaphaelDockleftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
