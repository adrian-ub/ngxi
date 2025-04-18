import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdPodiumIcon],svg[ion-md-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 224h128v192H32z" fill="currentColor"></svg:path><svg:path d="M192 128h128v288H192z" fill="currentColor"></svg:path><svg:path d="M352 288h128v128H352z" fill="currentColor"></svg:path>`,
})
export class IonMdPodiumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
