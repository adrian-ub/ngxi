import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdExpandIcon],svg[ion-md-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396.795 396.8H320V448h128V320h-51.205z" fill="currentColor"></svg:path><svg:path d="M396.8 115.205V192H448V64H320v51.205z" fill="currentColor"></svg:path><svg:path d="M115.205 115.2H192V64H64v128h51.205z" fill="currentColor"></svg:path><svg:path d="M115.2 396.795V320H64v128h128v-51.205z" fill="currentColor"></svg:path>`,
})
export class IonMdExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
