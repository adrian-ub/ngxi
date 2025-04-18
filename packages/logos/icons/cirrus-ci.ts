import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCirrusCiIcon],svg[logos-cirrus-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="128" r="128"></svg:circle><svg:path fill="#FAFAFA" d="M164.966 70.5c12.594 0 22.795 10.241 22.795 22.863a22.84 22.84 0 0 1-7.912 17.318A22.84 22.84 0 0 1 187.761 128c0 6.92-3.066 13.126-7.913 17.32a22.84 22.84 0 0 1 7.913 17.317c0 12.496-9.998 22.658-22.418 22.86l-.377.003H73.783a5.545 5.545 0 0 1-.194-11.086l.194-.004h91.183c6.46 0 11.706-5.266 11.706-11.773c0-6.42-5.107-11.633-11.448-11.77l-.258-.004H73.783a5.545 5.545 0 0 1-.194-11.086l.194-.004h91.183c6.46 0 11.706-5.266 11.706-11.773c0-6.42-5.107-11.633-11.448-11.77l-.258-.003H73.783a5.545 5.545 0 0 1-.194-11.087l.194-.003h91.183c6.46 0 11.706-5.267 11.706-11.774c0-6.42-5.107-11.633-11.448-11.77l-.258-.003a5.545 5.545 0 1 1 0-11.09"></svg:path>`,
})
export class LogosCirrusCiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
