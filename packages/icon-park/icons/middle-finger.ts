import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMiddleFingerIcon],svg[icon-park-middle-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M14.9718 26.9745C11.6511 27.5662 9.99072 29.5748 9.99072 33.0002C9.99072 38.1383 15.1438 44.0002 19.7905 44.0002C24.4372 44.0002 27.1321 44.0002 31.6802 44.0002C36.2283 44.0002 38.9907 40.1496 38.9907 37.0603C38.9907 32.7099 38.9907 28.3596 38.9907 24.0093C38.9907 22.3524 37.6476 21.0093 35.9907 21.0093H35.9816C34.3298 21.0093 32.9907 22.3484 32.9907 24.0002"></svg:path><svg:path d="M14.9717 30.0401V21.013C14.9717 19.3546 16.3161 18.0103 17.9744 18.0103C17.9755 18.0103 17.9765 18.0103 17.9775 18.0103C19.6381 18.012 20.9834 19.3586 20.9834 21.0192V25.0229"></svg:path><svg:path stroke-linejoin="round" d="M20.9834 24.0083V7.01549C20.9834 5.35008 22.3335 4 23.9989 4C25.6643 4 27.0144 5.35008 27.0144 7.01549V24.0083"></svg:path><svg:path stroke-linejoin="round" d="M26.9907 23.7158V21.0034C26.9907 19.3466 28.3339 18.0034 29.9907 18.0034C31.6476 18.0034 32.9907 19.3466 32.9907 21.0034V24.0034"></svg:path></svg:g>`,
})
export class IconParkMiddleFingerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
