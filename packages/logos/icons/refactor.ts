import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosRefactorIcon],svg[logos-refactor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 256h256V0H0v256z" fill="#16A085"></svg:path><svg:path d="M51.2 89.6h80V51.2h-80v38.4zM32 147.2h99.149v-38.4H32v38.4zM51.2 208h80v-38.4h-80V208z" fill="#FFF"></svg:path><svg:path d="M131.2 89.6h48.103V51.2H131.2v38.4zm0 57.6H208v-38.4h-76.8v38.4zm0 60.8h96v-38.4h-96V208z" fill="#8ACFC2"></svg:path>`,
})
export class LogosRefactorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
