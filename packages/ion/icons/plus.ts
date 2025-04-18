import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPlusIcon],svg[ion-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z" fill="currentColor"></svg:path>`,
})
export class IonPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
