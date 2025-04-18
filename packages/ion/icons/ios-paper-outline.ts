import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperOutlineIcon],svg[ion-ios-paper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 64v336h16V80h304v337.143c0 8.205-6.652 14.857-14.857 14.857H94.857C86.652 432 80 425.348 80 417.143V128h16v-16H64v305.143C64 434.157 77.843 448 94.857 448h322.285C434.157 448 448 434.157 448 417.143V64H112z" fill="currentColor"></svg:path><svg:path d="M160 112h128v16H160z" fill="currentColor"></svg:path><svg:path d="M160 192h240v16H160z" fill="currentColor"></svg:path><svg:path d="M160 272h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 352h240v16H160z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
