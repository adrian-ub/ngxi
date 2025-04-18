import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFaceGrimaceIcon],svg[fa6-solid-face-grimace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m96-112h-8v-40h55.3c-3.8 22.7-23.6 40-47.3 40m47.3-56H344v-40h8c23.8 0 43.5 17.3 47.3 40m-71.3 0h-64v-40h64zm0 56h-64v-40h64zm-80-96v40h-64v-40zm0 56v40h-64v-40zm-80-16h-55.3c3.8-22.7 23.6-40 47.3-40h8zm0 56h-8c-23.8 0-43.5-17.3-47.3-40H168zm-23.6-192a32 32 0 1 1 64 0a32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidFaceGrimaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
