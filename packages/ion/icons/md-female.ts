import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdFemaleIcon],svg[ion-md-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 176c0-79.5-64.5-144-144-144S112 96.5 112 176c0 71.4 51.9 130.6 120 142v50h-72v48h72v64h48v-64h72v-48h-72v-50c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96z" fill="currentColor"></svg:path>`,
})
export class IonMdFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
