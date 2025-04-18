import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSouthAfricaFlagIcon],svg[game-icons-south-africa-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v104.324L222.445 256L18 389.676V494h55.553l273.765-179H494V197H347.318L73.553 18zm88.447 0l246.235 161H494V18zm246.235 315L106.447 494H494V333z"></svg:path>`,
})
export class GameIconsSouthAfricaFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
